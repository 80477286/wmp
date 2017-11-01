Ext.define("App.reportconfiguration.chartconfiguration.view.ChartConfigurationWindow", {
    extend: 'Extend.window.FormWindow',
    requires: ['App.reportconfiguration.kpiconfiguration.view.KpiConfigurationList',
        'App.reportconfiguration.chartconfiguration.view.ChartConfigurationList',
        'App.reportconfiguration.chartconfiguration.model.SeriesModel',
        'App.reportconfiguration.chartconfiguration.model.AxisModel',
        'App.reportconfiguration.field.AxisTypeComboBox',
        'App.reportconfiguration.field.AxisPositionComboBox',
        'App.reportconfiguration.field.KpiFieldComboBox'],
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
                model: 'App.reportconfiguration.chartconfiguration.model.AxisModel',
                submitFields: ['type', 'position', 'fields', 'title', 'fieldAliases'],
                columns: [{
                    text: 'ID',
                    dataIndex: 'id',
                    hidden: true,
                    sortable: false
                }, {
                    text: '轴的类型',
                    dataIndex: 'type',
                    editor: {
                        xtype: 'AxisTypeComboBox',
                        listeners: {
                            select: function (combo, record, index, eOpts) {
                                var me = this;
                                var positionCombo = me.up('').down('AxisPositionComboBox');
                                if (combo.getValue() == "category") {
                                    positionCombo.getStore().setData([{name: 'bottom', value: 'bottom'}]);
                                    positionCombo.setValue('bottom');
                                } else {
                                    positionCombo.getStore().setData([{name: 'left', value: 'left'}, {
                                        name: 'right',
                                        value: 'right'
                                    }]);
                                    positionCombo.setValue('left');
                                }
                            }
                        }
                    }
                }, {
                    text: '位置',
                    dataIndex: 'position',
                    editor: {
                        xtype: 'AxisPositionComboBox',
                        listeners: {
                            beforequery: function (queryPlan, eOpts) {
                                var me = this;
                                var axisTypeCombo = me.up('').down('AxisTypeComboBox');
                                if (axisTypeCombo.getValue() == 'category') {
                                    me.getStore().setData([{name: 'bottom', value: 'bottom'}]);
                                } else {
                                    me.getStore().setData([{name: 'left', value: 'left'}, {
                                        name: 'right',
                                        value: 'right'
                                    }]);
                                }
                            }
                        }
                    }
                }, {
                    text: '字段',
                    dataIndex: 'fields',
                    editor: {
                        xtype: 'KpiFieldComboBox',
                        listeners: {
                            beforequery: function (queryPlan, eOpts) {
                                var me = this;
                                var form = me.up('window').down('panel');
                                me.setStore(form.kpiStore);
                            },
                            beforeselect: function (combo, record, index, eOpts) {
                                var me = this;
                                var array = new Array();
                                var value = combo.getValue();
                                for (var i = 0; i < value.length; i++) {
                                    array.push(me.getStore().findRecord('field', value[i]).get('name'));
                                }
                                array.push(record.get('name'));
                                me.up('').down('[dataIndex=fieldAliases]').setValue(array.join(","));
                            },
                            beforedeselect: function (combo, record, index, eOpts) {
                                var me = this;
                                var field = record.get('field');
                                var value = combo.getValue();
                                var array = new Array();
                                for (var i = 0; i < value.length; i++) {
                                    if (field != value[i]) {
                                        array.push(value[i]);
                                    }
                                }
                                var newArray = new Array();
                                for (var i = 0; i < array.length; i++) {
                                    newArray.push(me.getStore().findRecord('field', array[i]).get('name'))
                                }
                                me.up('').down('[dataIndex=fieldAliases]').setValue(newArray.join(","));
                            }
                        }
                    }
                }, {
                    text: '标题',
                    dataIndex: 'title',
                    editor: {}
                }, {
                    text: '字段别名',
                    dataIndex: 'fieldAliases',
                    editor: {}
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
                    dataIndex: 'type',
                    editor: {}
                }, {
                    text: 'xField',
                    dataIndex: 'xField',
                    editor: {}
                }, {
                    text: 'xFieldAlias',
                    dataIndex: 'xFieldAlias',
                    editor: {}
                }, {
                    text: 'yFields',
                    dataIndex: 'yFields',
                    editor: {}
                }, {
                    text: 'yFieldAliases',
                    dataIndex: 'yFieldAliases',
                    editor: {}
                }, {
                    text: 'axis',
                    dataIndex: 'axis',
                    editor: {}
                }]
            }]
        }
    ]
})
