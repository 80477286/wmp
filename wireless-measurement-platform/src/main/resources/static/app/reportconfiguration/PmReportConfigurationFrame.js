Ext.define('App.reportconfiguration.PmReportConfigurationFrame', {
    extend: 'App.commons.tab.BaseFrame',
    alias: ['widget.PmReportConfigurationFrame'],
    requires: ["App.reportconfiguration.view.ReportConfigurationList"],
    title: '报表模板配置',
    tabitems: [
        {
            xtype: 'ReportConfigurationList',
            bind: {
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
                    text: '自定义模板',
                    disabled: true,
                    itemId: 'convertToPrivate',
                    handler: function () {
                        var me = this.up('PmReportConfigurationFrame');
                        me.convertReportConfiguration();
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
                            this.down('button[itemId="convertToPrivate"]').setText('自定义模板');
                        } else {
                            this.down('button[itemId="convertToPrivate"]').setText('公共模板');
                        }
                    }
                }
            }
        }
    ],
    convertReportConfiguration: function () {
        var grid = this.down('ReportConfigurationList');
        var record = grid.getSelectedRecords()[0];
        if (!Ext.isEmpty(record.get('projectId'))) {
            var ids = grid.getSelectedIds();
            if (ids.length > 0) {
                this.convertPublic.call(grid, ids, null);
            }
            return;
        }

        Extend.Msg.confirm('确认', '请确定要使用自定义模板吗？', null,
            function (opt) {
                if (opt === 'yes') {
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
                }
            })
    },

    convertPublic: function (ids, messages) {
        var me = this;
        Extend.Msg.confirm('确认', '请确定要删除自定义模板使用公共模板吗？', messages,
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
})