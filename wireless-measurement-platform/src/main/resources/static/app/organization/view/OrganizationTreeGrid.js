Ext.define('App.organization.view.OrganizationTreeGrid', {
    extend: 'Extend.tree.Panel',
    alias: 'widget.OrganizationTreeGrid',
    requires: ['App.organization.model.OrganizationModel'],
    displayField: 'name',
    hideHeaders: false,
    forceFit: true,
    rowLines: true,
    columnLines: true,
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
            }
        });

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
            level: 0,
            id: 'root'
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
    createtmenu: function ($this, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        var me = this;
        if (cellIndex == 0) {
            var menu = Ext.create('Ext.menu.Menu', {
                items: [{
                    text: '刷新',
                    iconCls: 'refresh',
                    disabled: Ext.isEmpty(record.get('level'))
                    || record.get('level') == 0,
                    handler: function () {
                        me.mask('刷新...');
                        me.reloadNode(record);
                    }
                }, {
                    text: '展开',
                    iconCls: 'refresh',
                    disabled: Ext.isEmpty(record.get('level')),
                    handler: function () {
                        var nodes = me.getSelection();
                        if (nodes.length > 0) {
                            me.expandNode(nodes[0], false);
                        }
                    }
                }, {
                    text: '全展开',
                    iconCls: 'refresh',
                    disabled: Ext.isEmpty(record.get('level')),
                    handler: function () {
                        var nodes = me.getSelection();
                        if (nodes.length > 0) {
                            me.expandNode(nodes[0], true);
                        }
                    }
                }]
            });
            e.preventDefault();
            e.stopEvent();// 这两个很重要，否则点击鼠标右键还是会出现浏览器的选项

            menu.showAt(e.getXY());
        }
    },
    reloadNode: function (record) {
        var me = this;
        if (record.get('level') == 0) {
            record.set('loaded', false)
            record.set('expanded', false)
            me.expandNode(record, false);
        }
        var opts = {
            success: function (record, operation) {
                if (!Ext.isEmpty(record.get('level'))) {
                    record.set('loaded', false)
                    record.set('expanded', false)
                    me.expandNode(record, false);
                }
            }
        };
        if (Ext.isEmpty(record.get('level'))) {
            opts.url = "organization/get_by_id";
        }
        record.load(opts);
    }
})