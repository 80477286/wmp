Ext.define('App.reportconfiguration.view.BaseReportConfigurationEditor', {
    extend: 'Extend.form.Panel',
    requires: ['App.reportconfiguration.kpiconfiguration.view.KpiConfigurationList', 'App.reportconfiguration.chartconfiguration.view.ChartConfigurationList', 'App.reportconfiguration.kpiconfiguration.model.KpiConfigurationModel', 'App.reportconfiguration.kpiconfiguration.field.KpiDataTypeCombobox'],
    alias: ['widget.BaseReportConfigurationEditor'],
    url: '/report_configuration/save',
    config: {
        entity: 'reportConfiguration'
    },
    load: function (opts) {
        this.lastOpts = opts;
        this.callParent(arguments);
    },
    reload: function () {
        this.load(this.lastOpts);
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
        fieldLabel: '名称',
        readOnly: true
    }, {
        xtype: 'textfield',
        name: 'type',
        columnWidth: 0.5,
        fieldLabel: '类型',
        readOnly: true
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
                model: 'App.reportconfiguration.kpiconfiguration.model.KpiConfigurationModel',
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
                    dataIndex: 'field',
                    editor: {
                        xtype: 'textfield'
                    }
                }, {
                    text: '表达式',
                    dataIndex: 'expression',
                    editor: {
                        xtype: 'textfield'
                    }
                }, {
                    text: '类型',
                    dataIndex: 'dataType',
                    editor: {
                        xtype: 'KpiDataTypeCombobox'
                    }
                }, {
                    text: '日期格式',
                    dataIndex: 'format',
                    editor: {
                        xtype: 'textfield'
                    }
                }, {
                    text: '格式化',
                    dataIndex: 'formatter',
                    editor: {
                        xtype: 'textfield'
                    }
                }, {
                    text: '描述',
                    dataIndex: 'description',
                    editor: {
                        xtype: 'textfield'
                    }
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
                            record: record,
                            window: {height: 600, width: 800},
                            kpiStore: $this.up('').up('').down('GridField').getStore()
                        });
                        form.loadRecord(record);
                        form.show();
                    },
                }
            }]
    }]

})
