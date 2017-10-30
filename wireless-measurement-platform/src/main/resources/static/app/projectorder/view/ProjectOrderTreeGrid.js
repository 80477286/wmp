Ext.define('App.projectorder.view.ProjectOrderTreeGrid', {
    extend: 'App.projectorder.view.BaseProjectOrderTree',
    alias: 'widget.ProjectOrderTreeGrid',
    config: {
        tbar: {
            add: {
                text: '添加',
                iconCls: 'add',
                disabled: true,
                handler: function () {
                    var me = this.up('ProjectOrderTreeGrid');
                    var records = me.getSelection();
                    if (records.length > 0) {
                        me.editHandler.call(me, me, records[0], null);
                    } else {
                        me.editHandler.call(me, me, me.getRootNode(), null);
                    }
                }
            },
            edit: {
                text: '编辑',
                iconCls: 'edit',
                disabled: true,
                handler: function () {
                    var me = this.up('ProjectOrderTreeGrid');
                    var records = me.getSelection();
                    if (records.length > 0) {
                        me.editHandler.call(me, me, null, records[0]);
                    } else {
                        Extend.Msg.error('错误', '操作失败，请先选择要编辑的节点！')
                    }
                }
            },
            remove: {
                text: '删除',
                disabled: true,
                handler: function () {
                    var view = this.up('ProjectOrderTreeGrid');
                    view.removeSelectionNode();
                }
            },
            refresh: {
                text: '刷新',
                handler: function () {
                    var view = this.up('ProjectOrderTreeGrid');
                    var selection = view.getChecked();
                    if (selection.length > 0) {
                        view.reloadNode(selection[0]);
                    } else {
                        var root = view.getRootNode();
                        root.set('loaded', false)
                        root.set('expanded', false)
                        view.expandNode(root, false);
                    }
                }
            }
        }
    },
    columns: [{
        xtype: 'treecolumn',
        text: '名称',
        dataIndex: 'name'
    }, {
        text: '类型',
        dataIndex: 'type'
    }, {
        text: '创建人',
        dataIndex: 'creator'
    }, {
        xtype: 'cdtcolumn',
        text: '创建时间',
        dataIndex: 'cdt'
    }],
    initComponent: function () {
        var me = this;
        this.callParent(arguments);
        me.on({
            selectionchange: function ($this, selected, eOpts) {
                var me = this;
                me.down('button[text="添加"]').disable();
                me.down('button[text="编辑"]').disable();
                me.down('button[text="删除"]').disable();
                if (selected.length > 0) {
                    if (selected[0].get('type').toLowerCase() == 'pdu') {
                        me.down('button[text="添加"]').enable();
                        me.down('button[text="编辑"]').enable();
                        me.down('button[text="删除"]').enable();
                    }
                }
            }
        })
    },
    removeSelectionNode: function () {
        var view = this;
        Ext.Msg.confirm('确认', '请确定您是否要删除选择的数据，删除后将不可恢复？',
            function (opt) {
                if (opt === 'yes') {
                    view.mask('删除...');
                    var ids = view.getSelectedIds();
                    Ext.Ajax.request({
                        url: 'organization/deletes',
                        params: {'ids': ids},
                        success: function (resp) {
                            try {
                                var selection = view.getSelection();
                                Ext.Array.each(selection, function (item) {
                                    item.remove();
                                });
                            } finally {
                                view.unmask();
                            }
                        }
                    });
                }
            });
    },
    editHandler: function (me, parent, node) {
        var clazz = 'App.projectorder.view.ProjectOrderEditorWindow';
        var url = 'projectorder/save';
        if (!Ext.isEmpty(parent)) {
            var node = {
                type: type,
                organization: {
                    id: parent.get('id')
                }
            }
            Ext.create(clazz, {
                url: url,
                listeners: {
                    save: function () {
                        parent.set('loaded', false)
                        parent.set('expanded', false);
                        me.expandNode(parent, false);
                    }
                }
            }).show().loadRecord(node);
        } else {
            var getUrl = 'projectorder/get_by_id';
            parent = node.parentNode;
            Ext.create(clazz, {
                url: url,
                model: 'App.projectorder.model.ProjectOrderModel',
                listeners: {
                    save: function () {
                        parent.set('loaded', false)
                        parent.set('expanded', false);
                        me.expandNode(parent, false);
                    }
                }
            }).show().load({
                url: getUrl,
                params: {
                    id: node.get('id')
                }
            });
        }
    }
})