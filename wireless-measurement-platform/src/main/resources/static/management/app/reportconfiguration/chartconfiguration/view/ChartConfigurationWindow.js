Ext.define("App.reportconfiguration.chartconfiguration.view.ChartConfigurationWindow", {
    extend: 'Extend.window.FormWindow',
    requires: ['App.reportconfiguration.kpiconfiguration.view.KpiConfigurationList', 'App.reportconfiguration.chartconfiguration.view.ChartConfigurationList'],
    alias: 'widget.chart_configuration_editor',
    config: {
        window: {
            title: '图信息修改',
            width: 1024,
            height: 800
        },
        entity: 'reportConfiguration'
    },
    defaults: {
        columnWidth: 1
    },
    items: [{
        xtype: 'panel',
        height: 800,
        layout: 'border',
        items: [{
            xtype: 'panel',
            region: 'north',
            items: [{
                xtype: 'textfield',
                name: 'title',
                fieldLabel: '名称'
            }]
        }, {
            xtype: 'tabpanel',
            region: 'center',
            items: [{
                title: '轴配置',
                xtype: 'GridField',
                name: 'axes',
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
                    text: '日期格式',
                    dataIndex: 'format'
                }, {
                    text: '格式化',
                    dataIndex: 'formatter'
                }, {
                    text: '描述',
                    dataIndex: 'description'
                }],
                addHandler: function () {
                    var me = this;
                    var form = Ext.create('App.reportconfiguration.kpiconfiguration.view.KpiConfigurationWindow', {
                        kpiConfiguration: me
                    });
                    form.show();
                }

            }, {
                xtype: 'GridField',
                title: 'series配置',
                name: 'series',
                xtype: 'GridField',
                columns: [{
                    text: 'ID',
                    dataIndex: 'id',
                    hidden: true,
                }, {
                    text: '标题',
                    dataIndex: 'title'
                }]
            }]
        }]
    }]
})
