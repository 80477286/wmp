Ext.define('App.reportconfiguration.view.ProjectReportConfigurationList', {
        extend: 'App.reportconfiguration.view.CommonReportConfigurationList',
        alias: 'widget.ProjectReportConfigurationList', bind: {
            store: '{QueryByProject}',
            columns: '{projectColumns}',
            search: '{search}'
        },
        extraParams: function () {
            return {
                'params.type_like': '迭代度量-%',
                'params.projectId': app.project.id
            }
        },
        tbar: {
            convertToPrivate: {
                text: '使用自定义模板',
                disabled: true,
                itemId: 'convertToPrivate',
                handler: function () {
                    var me = this.up('ProjectReportConfigurationList');
                    var record = me.getSelectedRecords()[0];
                    if (!Ext.isEmpty(record.get('projectId'))) {
                        var ids = me.getSelectedIds();
                        if (ids.length > 0) {
                            me.convertToPublic(ids, null);
                        }
                        return;
                    }
                    Extend.Msg.confirm('确认', '请确定是否要创建并使用自定义模板？', null,
                        function (opt) {
                            if (opt === 'yes') {
                                me.convertToPrivate(record);
                            }
                        })
                }
            }
        },
        listeners: {
            selectionchange: function () {
                var selection = this.getSelectedRecords();
                this.down('button[itemId="convertToPrivate"]').disable();
                if (selection.length == 1) {
                    this.down('button[itemId="convertToPrivate"]').enable();
                    if (Ext.isEmpty(selection[0].get('projectId'))) {
                        this.down('button[itemId="convertToPrivate"]').setText('使用自定义模板');
                    } else {
                        this.down('button[itemId="convertToPrivate"]').setText('使用公共模板');
                    }
                }
            }
        },
        convertToPrivate: function (record) {
            var grid = this;
            var url = "/report_configuration/convert_to_private";
            var params = {};
            params['id'] = record.get('id')
            params['pid'] = app.project.id;
            grid.mask('转换...')
            Ext.Ajax.request({
                url: url,
                params: params,
                success: function (resp) {
                    grid.reload();
                },
                callback: function () {
                    grid.unmask();
                }
            });
        },
        convertToPublic: function (ids, messages) {
            var me = this;
            Extend.Msg.confirm('确认', '请确定是否要删除自定义模板并使用公共模板吗？', messages,
                function (opt) {
                    if (opt === 'yes') {
                        me.mask('转换...')
                        var params = {
                            ids: ids
                        };

                        if (this.coerciveDeleteCheckbox.getValue()) {
                            params.coercive = true;
                        }
                        Ext.Ajax.request({
                            url: me.api.del || me.api.remove
                            || me.api.destory
                            || me.editor.del
                            || me.editor.remove
                            || me.editor.destory,
                            params: params,
                            success: function (resp) {
                                try {
                                    if (resp.result.success) {
                                        me.deselectAll();
                                        me.reload();
                                    }
                                } finally {
                                    me.unmask();
                                }
                            },
                            failure: function () {
                                me.unmask();
                            }
                        });
                    }
                }, me.coerciveDeleteConfirm)
        }
        ,
        resetButtons: function (selected) {
            this.callParent(arguments);
            var btnEdit = this
                .down('button[action="edit"]');
            if (selected.length > 0) {
                if (Ext.isEmpty(selected[0].get('projectId'))) {
                    btnEdit.disable();
                }
            }
        }
        ,
        editHandler: function (record, quickCreate, data) {
            var me = this;
            if (Ext.isEmpty(record.get('projectId'))) {
                Extend.Msg.confirm('提示', '公共模板无法进行修改，如果你需要使用自定义模板请“确认”，否则请点“取消”！', null, function (opt) {
                    if (opt == 'yes') {
                        me.convertToPrivate(record);
                    }
                })
                return false;
            }
        }
    }
)