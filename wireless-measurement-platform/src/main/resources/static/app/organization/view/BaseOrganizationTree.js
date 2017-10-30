Ext.define('App.organization.view.BaseOrganizationTree', {
    extend: 'Extend.tree.Panel',
    alias: 'widget.BaseOrganizationTree',
    requires: ['App.organization.model.OrganizationModel'],
    displayField: 'name',
    hideHeaders: false,
    forceFit: true,
    rowLines: true,
    columnLines: true,
    rootVisible: false,
    config: {multiCheck: false},
    initComponent: function () {
        var me = this;
        this.callParent(arguments);
        me.on({
            afterrender: function () {
                Ext.defer(function () {
                    me.expandNode(me.getRootNode(), false);
                }, 10);
            },
            cellcontextmenu: function ($this, td, cellIndex, record,
                                       tr, rowIndex, e, eOpts) {
                me.createtmenu($this, td, cellIndex, record, tr,
                    rowIndex, e, eOpts);
            },
            itemexpand: function (node) {
                var nodes = node.childNodes;
                Ext.Array.each(nodes, function (item) {
                    if (item.get('checked') == undefined) {
                        item.set('checked', false)
                    }
                });
            },
            selectionchange: function ($this, selected, eOpts) {
                var me = this;
                if (selected.length > 0) {
                    Ext.Array.each(selected, function (item) {
                        item.set('checked', true)
                        me.fireEvent('checkchange', item, true, null)
                    });
                }
            }
        })
    },
    columns: [{
        xtype: 'treecolumn',
        text: '名称',
        dataIndex: 'name'
    }],
    store: {
        autoLoad: false,
        model: 'App.organization.model.OrganizationModel',
        nodeParam: "id",
        root: {
            name: '加载...',
            expanded: false,
            id: 'root',
            type: 'root'
        },
        sorters: [{
            property: 'index',
            direction: 'desc'
        }],
        proxy: {
            type: 'ajax',
            url: 'organization/get_children',
            idParam: 'id',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        }
    },
    createMenuItems: function (record) {
        var me = this;
        var items = [{
            text: '刷新',
            iconCls: 'refresh',
            handler: function () {
                me.reloadNode(record);
            }
        }, {
            text: '展开',
            iconCls: 'refresh',
            disabled: record.get('type').toLowerCase() == 'pdu',
            handler: function () {
                var nodes = me.getSelection();
                if (nodes.length > 0) {
                    me.expandNode(nodes[0], false);
                }
            }
        }, {
            text: '全展开',
            iconCls: 'refresh',
            disabled: record.get('type').toLowerCase() == 'pdu',
            handler: function () {
                var nodes = me.getSelection();
                if (nodes.length > 0) {
                    me.expandNode(nodes[0], true);
                }
            }
        }];
        return items;
    },
    createtmenu: function ($this, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        var me = this;
        if (cellIndex == 0) {
            var items = me.createMenuItems(record);
            var menu = Ext.create('Ext.menu.Menu', {
                items: items
            })
            e.preventDefault();
            e.stopEvent();// 这两个很重要，否则点击鼠标右键还是会出现浏览器的选项
            menu.showAt(e.getXY());
        }
    },
    reloadNode: function (record) {
        var me = this;
        me.mask('刷新...');
        var me = this;
        var opts = {
            success: function (loadedRecord, operation) {
                if (record.get('leaf') != true) {
                    record.set('loaded', false)
                    record.set('expanded', false)
                    me.expandNode(record, false, function () {
                        me.unmask();
                    });
                } else {
                    me.unmask();
                }
            }
        };
        record.load(opts);
    }
})