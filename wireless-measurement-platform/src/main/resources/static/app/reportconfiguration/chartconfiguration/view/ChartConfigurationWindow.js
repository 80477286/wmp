Ext.define("App.reportconfiguration.chartconfiguration.view.ChartConfigurationWindow", {
    extend: 'Extend.window.FormWindow',
    requires: ['App.reportconfiguration.kpiconfiguration.view.KpiConfigurationList',
        'App.reportconfiguration.chartconfiguration.view.ChartConfigurationList',
        'App.reportconfiguration.chartconfiguration.model.SeriesModel',
        'App.reportconfiguration.chartconfiguration.model.AxisModel',
        'App.reportconfiguration.field.AxisTypeComboBox',
        'App.reportconfiguration.field.AxisPositionComboBox',
        'App.reportconfiguration.field.KpiFieldComboBox',
        'App.reportconfiguration.field.SeriesTypeComboBox',
        'App.reportconfiguration.field.AxisDirectionComboBox',
        'App.reportconfiguration.field.XAxisComboBox',
        'App.reportconfiguration.field.YAxisComboBox'],
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
                    editor: {}
                }, {
                    text: '标题',
                    dataIndex: 'title',
                    editor: {}
                }, {
                    text: '字段别名',
                    dataIndex: 'fieldAliases',
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
                                Ext.Array.each(value, function (name) {
                                    array.push(me.getStore().findRecord('name', name).get('field'));
                                });
                                array.push(record.get('field'));
                                me.up('').down('[dataIndex=fields]').setValue(array.join(","));
                            },
                            beforedeselect: function (combo, record, index, eOpts) {
                                var me = this;
                                var value = combo.getValue();
                                Ext.Array.remove(value, record.get('name'));
                                me.up('').down('[dataIndex=fields]').setValue(value.join(","));
                            }
                        }
                    }
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
                    editor: {
                        xtype: 'SeriesTypeComboBox'
                    }
                }, {
                    text: 'xField',
                    dataIndex: 'xField',
                    editor: {}
                }, {
                    text: 'xFieldAlias',
                    dataIndex: 'xFieldAlias',
                    editor: {
                        xtype: 'XAxisComboBox',
                        listeners: {
                            beforequery: function () {
                                var me = this;
                                var axis = me.up('').up('').up('').down('GridField');
                                var records = axis.getStore().getData().items;
                                var data = new Array();
                                Ext.Array.each(records, function (record) {
                                    if (record.get('type') == 'category') {
                                        var type = record.get('type');
                                        var position = record.get('position');
                                        var fields = record.get('fields');
                                        var title = record.get('title');
                                        var fieldAliases = record.get('fieldAliases');
                                        data.push({
                                            type: type,
                                            position: position,
                                            fields: fields,
                                            title: title,
                                            fieldAliases: fieldAliases
                                        });
                                    }
                                });
                                var store = Ext.create('Ext.data.Store', {
                                    fields: ['type', 'position', 'fields', 'title', 'fieldAliases'],
                                    data: data
                                });
                                me.setStore(store);
                            },
                            select: function (combo, record, eOpts) {
                                var me = combo;
                                var r = me.getStore().findRecord('fields', record.get('fields'));
                                me.up('').down('[dataIndex=xField]').setValue(r.get('fields'))
                            }
                        }
                    }
                }, {
                    text: 'yFields',
                    dataIndex: 'yFields',
                    editor: {}
                }, {
                    text: 'yFieldAliases',
                    dataIndex: 'yFieldAliases',
                    editor: {
                        xtype: 'YAxisComboBox',
                        listeners: {
                            beforequery: function () {
                                var axis = this.up('').up('').up('').down('GridField');
                                var records = axis.getStore().query('type', 'numeric');
                                var data = new Array();
                                for (var i = 0; i < records.length; i++) {
                                    var record = records.getAt(i);
                                    var type = record.get('type');
                                    var position = record.get('position');
                                    var fields = record.get('fields');
                                    var title = record.get('title');
                                    var fieldAliases = record.get('fieldAliases');
                                    data.push({
                                        type: type,
                                        position: position,
                                        fields: fields,
                                        title: title,
                                        fieldAliases: fieldAliases
                                    });
                                }
                                var store = Ext.create('Ext.data.Store', {
                                    fields: ['type', 'position', 'fields', 'title', 'fieldAliases'],
                                    data: data
                                });
                                this.setStore(store);
                            },
                            select: function (combo, record, eOpts) {
                                var me = combo;
                                var array = new Array();
                                Ext.Array.each(combo.getValue(), function (name) {
                                    array.push(me.getStore().findRecord('fieldAliases', name).get('fields'));
                                });
                                me.up('').down('[dataIndex=yFields]').setValue(array.join(","))
                            },
                            beforedeselect: function (combo, record, index, eOpts) {
                                var me = combo;
                                var array = new Array();
                                Ext.Array.each(combo.getValue(), function (name) {
                                    array.push(me.getStore().findRecord('fieldAliases', name).get('fields'));
                                });
                                me.up('').down('[dataIndex=yFields]').setValue(array.join(","))
                            }
                        }
                    }
                }, {
                    text: 'axis',
                    dataIndex: 'axis',
                    editor: {
                        xtype: 'AxisDirectionComboBox'
                    }
                }]
            }]
        }
    ]
})
