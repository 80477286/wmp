Ext.define("App.reportconfiguration.chartconfiguration.view.ChartConfigurationWindow", {
    extend: 'Extend.window.FormWindow',
    requires: ['App.reportconfiguration.kpiconfiguration.view.KpiConfigurationList', 'App.reportconfiguration.chartconfiguration.view.ChartConfigurationList','App.reportconfiguration.chartconfiguration.model.SeriesModel'],
    alias: 'widget.chart_configuration_editor',
    config: {
        window: {
            title: '图信息修改',
            width: 1024,
            height: 800,
            buttons: {
                save: {
                    text: '添加',
                    handler: function () {
                        var me = this;
                        var form = me.up('window').down('panel');
                        var chartConfiguration = form.chartConfiguration;
                        if (form.record) {
                            chartConfiguration.getStore().remove(form.record);
                        }
                        chartConfiguration.getStore().insert(0, form.getDatas());
                        form.close();
                    }
                }
            }
        }
    },
    defaults: {
        columnWidth: 1
    },
    items: [
        {
            xtype: 'textfield',
            name: 'title',
            fieldLabel: '名称',
            labelWidth: 40,
        }, {
            xtype: 'tabpanel',
            region: 'center',
            items: [{
                title: '轴配置',
                xtype: 'GridField',
                border: false,
                name: 'axes',
                roweditable: true,
                submitFields: ['type', 'position', 'fields', 'title', 'fieldAliases'],
                columns: [{
                    text: 'ID',
                    dataIndex: 'id',
                    hidden: true,
                    sortable: false
                }, {
                    text: '轴的类型',
                    dataIndex: 'type',
                    editor: {}
                }, {
                    text: '位置',
                    dataIndex: 'position'
                }, {
                    text: '字段',
                    dataIndex: 'fields'
                }, {
                    text: '标题',
                    dataIndex: 'title'
                }, {
                    text: '字段别名',
                    dataIndex: 'fieldAliases'
                }]

            }, {
                xtype: 'GridField',
                title: 'series配置',
                name: 'series',
                roweditable: true,
                model: 'App.reportconfiguration.chartconfiguration.model.SeriesModel',
                submitFields: ['type', 'xField', 'xFieldAlias', 'yFields', 'yFieldAliases', 'axis'],
                columns: [{
                    text: 'ID',
                    dataIndex: 'id',
                    hidden: true,
                }, {
                    text: '类型',
                    dataIndex: 'type', editor: {}
                }, {
                    text: 'xField',
                    dataIndex: 'xField', editor: {}
                }, {
                    text: 'xFieldAlias',
                    dataIndex: 'xFieldAlias'
                }, {
                    text: 'yFields',
                    dataIndex: 'yFields'
                }, {
                    text: 'yFieldAliases',
                    dataIndex: 'yFieldAliases'
                }, {
                    text: 'axis',
                    dataIndex: 'axis'
                }]
            }]
        }
    ]
})
