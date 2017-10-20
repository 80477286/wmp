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
            height: 150,
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
                xtype: 'KpiConfigurationList',
                title: '指标配置'
            }, {
                xtype: 'ChartConfigurationList',
                title: '图配置'
            }]
        }]
    }]
})
