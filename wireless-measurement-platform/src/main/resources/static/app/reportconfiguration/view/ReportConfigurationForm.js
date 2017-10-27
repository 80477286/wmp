Ext.define("App.reportconfiguration.view.ReportConfigurationForm", {
    extend: 'Extend.form.Panel',
    requires: ['App.reportconfiguration.kpiconfiguration.view.KpiConfigurationList', 'App.reportconfiguration.chartconfiguration.view.ChartConfigurationList'],
    alias: ['widget.ReportConfigurationForm'],
    config: {
        entity: 'reportConfiguration'
    },
    defaults: {
        columnWidth: 1
    },
    items: [{
        xtype: 'textfield',
        name: 'id',
        hidden: true
    }, {
        xtype: 'textfield',
        name: 'name',
        columnWidth: 0.5,
        fieldLabel: '名称'
    }, {
        xtype: 'textfield',
        name: 'type',
        columnWidth: 0.5,
        fieldLabel: '类型'
    }, {
        xtype: 'textfield',
        name: 'description',
        fieldLabel: '描述'
    }, {
        xtype: 'tabpanel',
        height: 400,
        items:
            [{
                title: '指标配置',
                xtype: 'GridField',
                name: 'kpiConfigurations',
                border: false,
                submitFields: ['name', 'field', 'expression', 'dataType', 'format', 'formatter', 'description'],
                roweditable: true,
                columns: [{
                    text: 'ID',
                    dataIndex: 'id',
                    hidden: true,
                    sortable: false
                }, {
                    text: '名称',
                    dataIndex: 'name',
                    editor: {
                        xtype: 'textfield'
                    }
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
                border: false,
                name: 'chartConfigurations',
                xtype: 'GridField',
                submitFields: ['title', 'axes.type', 'axes.position', 'axes.fields', 'axes.title', 'axes.fieldAliases', 'series.type', 'series.xField', 'series.xFieldAlias', 'series.yFields', 'series.yFieldAliases', 'series.axis'],
                columns: [{
                    text: 'ID',
                    dataIndex: 'id',
                    hidden: true,
                }, {
                    text: '标题',
                    dataIndex: 'title'
                }],
                addHandler: function () {
                    var me = this;
                    var form = Ext.create('App.reportconfiguration.chartconfiguration.view.ChartConfigurationWindow', {
                        chartConfiguration: me, window: {height: 600, width: 800}
                    });
                    form.show();
                },
                listeners: {
                    itemdblclick: function ($this, record, item, index, e, eOpts) {
                        var form = Ext.create('App.reportconfiguration.chartconfiguration.view.ChartConfigurationWindow', {
                            chartConfiguration: $this,
                            record: record, window: {height: 600, width: 800}
                        });
                        form.loadRecord(record);
                        form.show();
                    },
                }
            }]
    }]

})
