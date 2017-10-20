Ext.define("App.reportconfiguration.view.ReportConfigurationWindow", {
    extend: 'Extend.window.FormWindow',
    requires: ['App.reportconfiguration.kpiconfiguration.view.KpiConfigurationList', 'App.reportconfiguration.chartconfiguration.view.ChartConfigurationList'],
    alias: 'widget.employee_editor',
    config: {
        window: {
            title: '报表信息修改',
            width: 1024,
            height: 600
        },
        entity: 'reportConfiguration'
    },
    items: [{
        xtype: 'panel',
        height: 600,
        layout: 'border',
        items: [{
            xtype: 'panel',
            region: 'north',
            items: [{
                xtype: 'textfield',
                name: 'name',
                fieldLabel: '名称'
            }, {
                xtype: 'textfield',
                name: 'type',
                fieldLabel: '类型'
            }, {
                xtype: 'textfield',
                name: 'creator',
                fieldLabel: '创建者'
            }, {
                xtype: 'textfield',
                name: 'description',
                fieldLabel: '描述'
            }]
        }, {
            xtype: 'tabpanel',
            region: 'center',
            items: [{
                title: '指标配置',
                xtype: 'GridField',
                name: 'kpiConfigurations',
                columns: [{
                    text: 'ID',
                    dataIndex: 'id',
                    hidden: true,
                    sortable: false
                }, {
                    text: '名称',
                    dataIndex: 'name'
                }, {
                    text: '字段',
                    dataIndex: 'field'
                }, {
                    text: '表达式',
                    dataIndex: 'expression'
                }, {
                    text: '类型',
                    dataIndex: 'dataType'
                }, {
                    text: '描述',
                    dataIndex: 'description'
                }]
            }, {
                xtype: 'panel',
                title: '图配置',
                layout: 'border',
                items: [
                    {
                        xtype: 'panel',
                        region: 'north',
                        items: [{
                            xtype: 'textfield',
                            name: 'title',
                            fieldLabel: '图标题'
                        }]
                    }, {
                        xtype: 'tabpanel',
                        region: 'center',
                        items: [{
                            xtype: 'panel',
                            title: '轴配置'
                        }, {
                            xtype: 'panel',
                            title: 'series配置'
                        }]
                    }
                ]
            }]
        }]
    }]
})
