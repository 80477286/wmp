Ext.define("App.reportconfiguration.view.ReportConfigurationWindow", {
    extend: 'Extend.window.FormWindow',
    requires: ['App.reportconfiguration.kpiconfiguration.view.KpiConfigurationList', 'App.reportconfiguration.chartconfiguration.view.ChartConfigurationList'],
    alias: 'widget.report_configuration_editor',
    config: {
        window: {
            title: '报表信息修改',
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
                name: 'id',
                hidden: true
            }, {
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
                submitFields: ['name', 'field', 'expression', 'dataType', 'format', 'formatter', 'description'],
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
                title: '图配置',
                name: 'chartConfigurations',
                xtype: 'GridField',
                submitFields: ['title'],
                columns: [{
                    text: 'ID',
                    dataIndex: 'id',
                    hidden: true,
                }, {
                    text: '标题',
                    dataIndex: 'title'
                }],
                addHandler: function () {
                    var form = Ext.create('App.reportconfiguration.chartconfiguration.view.ChartConfigurationWindow');
                    form.show();
                },
                listeners: {
                    itemdblclick: function ($this, record, item, index, e, eOpts) {
                        var form = Ext.create('App.reportconfiguration.chartconfiguration.view.ChartConfigurationWindow');
                        form.loadRecord(record);
                        form.show();
                    },
                }
            }]
        }]
    }]
})
