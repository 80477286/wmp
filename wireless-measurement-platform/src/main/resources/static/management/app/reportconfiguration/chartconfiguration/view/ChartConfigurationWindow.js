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
                submitFields:['type','position','fields','title','fieldAliases'],
                columns: [{
                    text: 'ID',
                    dataIndex: 'id',
                    hidden: true,
                    sortable: false
                }, {
                    text: '轴的类型',
                    dataIndex: 'type'
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
                submitFields:['type','xField','xFieldAlias','yFields','yFieldAliases','axis'],
                columns: [{
                    text: 'ID',
                    dataIndex: 'id',
                    hidden: true,
                }, {
                    text: '类型',
                    dataIndex: 'type'
                }, {
                    text: 'xField',
                    dataIndex: 'xField'
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
        }]
    }]
})
