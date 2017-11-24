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
                getValue: function () {
                    var me = this;
                    if (me.submitValue === false) {
                        return null;
                    }
                    var data = null;
                    if (!me.disabled) {
                        var rs = me.getRecords();
                        if (rs.length > 0) {
                            data = {};
                            var sfs = me.getSubmitFields();
                            if (!Ext.isEmpty(sfs) && sfs.length > 0) {
                                for (var i = 0; i < rs.length; i++) {
                                    var record = rs[i].data;
                                    for (var j = 0; j < sfs.length; j++) {
                                        var sf = sfs[j];
                                        if (!Ext.isObject(sf)) {
                                            sf = {
                                                field: sf,
                                                column: sf,
                                                valueList: false
                                            };
                                        }
                                        if (sfs.length > 1) {
                                            sf.valueList = false;
                                        }
                                        var values = this._getValuesBySubmitField(record,
                                            sf, i);
                                        var fieldAliases = values.fieldAliases;
                                        if (fieldAliases) {
                                            var paramName = sf.valueList == true ? (me
                                                .getName()) : (me.getName() + '[' + i
                                                + '].' + 'fieldAliases');
                                            if (Ext.isEmpty(data[paramName])) {
                                                data[paramName] = [];
                                            }
                                            if (Array.isArray(fieldAliases)) {
                                                data[paramName].push(fieldAliases.join(","));
                                            } else {
                                                data[paramName].push(fieldAliases);
                                            }
                                        } else {
                                            for (var key in values) {
                                                var paramName = sf.valueList == true ? (me
                                                    .getName()) : (me.getName() + '[' + i
                                                    + '].' + key);
                                                if (Ext.isEmpty(data[paramName])) {
                                                    data[paramName] = [];
                                                }
                                                data[paramName].push(values[key]);
                                            }
                                        }
                                    }
                                }
                            } else {
                                Ext.log.warn('未配置提交字段列表属性:submitFields')
                            }
                        }
                    }
                    return data;
                },
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
                    hidden: true,
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
                            change: function (combo, nv, ov) {
                                array = new Array();
                                var selection = combo.getChecked();
                                for (var i = 0; i < selection.length; i++) {
                                    var rec = selection[i];
                                    array.push(rec.get("field"));
                                }
                                combo.up().down('[dataIndex=fields]').setValue(array.join(","));
                            }
                        }
                    }
                }]
            }, {
                xtype: 'GridField',
                title: 'series配置',
                name: 'series',
                roweditable: true,
                getValue: function () {
                    var me = this;
                    if (me.submitValue === false) {
                        return null;
                    }
                    var data = null;
                    if (!me.disabled) {
                        var rs = me.getRecords();
                        if (rs.length > 0) {
                            data = {};
                            var sfs = me.getSubmitFields();
                            if (!Ext.isEmpty(sfs) && sfs.length > 0) {
                                for (var i = 0; i < rs.length; i++) {
                                    var record = rs[i].data;
                                    for (var j = 0; j < sfs.length; j++) {
                                        var sf = sfs[j];
                                        if (!Ext.isObject(sf)) {
                                            sf = {
                                                field: sf,
                                                column: sf,
                                                valueList: false
                                            };
                                        }
                                        if (sfs.length > 1) {
                                            sf.valueList = false;
                                        }
                                        var values = this._getValuesBySubmitField(record,
                                            sf, i);
                                        var fieldAliases = values.yFieldAliases;
                                        if (fieldAliases) {
                                            var paramName = sf.valueList == true ? (me
                                                .getName()) : (me.getName() + '[' + i
                                                + '].' + 'yFieldAliases');
                                            if (Ext.isEmpty(data[paramName])) {
                                                data[paramName] = [];
                                            }
                                            if (Array.isArray(fieldAliases)) {
                                                data[paramName].push(fieldAliases.join(","));
                                            } else {
                                                data[paramName].push(fieldAliases);
                                            }
                                        } else {
                                            for (var key in values) {
                                                var paramName = sf.valueList == true ? (me
                                                    .getName()) : (me.getName() + '[' + i
                                                    + '].' + key);
                                                if (Ext.isEmpty(data[paramName])) {
                                                    data[paramName] = [];
                                                }
                                                data[paramName].push(values[key]);
                                            }
                                        }
                                    }
                                }
                            } else {
                                Ext.log.warn('未配置提交字段列表属性:submitFields')
                            }
                        }
                    }
                    return data;
                },
                model: 'App.reportconfiguration.chartconfiguration.model.SeriesModel',
                submitFields: ['type', 'xField', 'xFieldAlias', 'yFields', 'yFieldAliases', 'axis'],
                listeners: {
                    activate: function ($this, eOpts) {
                        var axis = this.up('').up('').up('').down('GridField');
                        var records = axis.getStore().query('type', 'category');
                        if (records.length == 0) {
                            Ext.MessageBox.alert("提示", "请配置【category】");
                            this.up('').setActiveTab(0);
                        }
                    }
                },
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
                    editor: {},
                    hidden: true
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
                                        var fields = record.get('fields');
                                        var fieldAliases = record.get('fieldAliases');
                                        data.push({
                                            fields: fields,
                                            fieldAliases: fieldAliases
                                        });
                                    }
                                });
                                var store = Ext.create('Ext.data.Store', {
                                    fields: ['fields', 'fieldAliases'],
                                    data: data
                                });
                                me.setStore(store);
                            }
                        }
                    }
                }, {
                    text: 'yFields',
                    dataIndex: 'yFields',
                    hidden: true,
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
                                var filterArray = new Array();
                                for (var i = 0; i < records.length; i++) {
                                    var record = records.getAt(i);
                                    var fields = record.get('fields');
                                    var fieldArray = split(fields);
                                    var fieldAliases = split(record.get('fieldAliases'));
                                    for (var j = 0; j < fieldAliases.length; j++) {
                                        var item = {
                                            fields: fieldArray[j],
                                            fieldAliases: fieldAliases[j]
                                        };
                                        if (!Ext.Array.contains(filterArray, fieldArray[j])) {
                                            data.push(item);
                                            filterArray.push(fieldArray[j]);
                                        }
                                    }
                                }
                                var store = Ext.create('Ext.data.Store', {
                                    fields: ['fields', 'fieldAliases'],
                                    data: data
                                });
                                this.setStore(store);
                            },
                            change: function (combo, nv, ov) {
                                array = new Array();
                                var selection = combo.getChecked();
                                for (var i = 0; i < selection.length; i++) {
                                    var rec = selection[i];
                                    array.push(rec.get("fields"));
                                }
                                combo.up().down('[dataIndex=yFields]').setValue(array.join(","));
                            }
                        }
                    }
                }, {
                    text: 'axis',
                    dataIndex: 'axis',
                    editor: {
                        xtype: 'AxisDirectionComboBox',
                        listeners: {
                            beforequery: function () {
                                var me = this;
                                var axis = this.up('').up('').up('').down('GridField');
                                var records = axis.getStore().getData().items;
                                var data = new Array();
                                var filter = new Array();
                                Ext.Array.each(records, function (record) {
                                    var position = record.get('position');
                                    if (position != 'bottom') {
                                        if (!Ext.Array.contains(filter, position)) {
                                            filter.push(position);
                                            data.push({
                                                name: position,
                                                value: position
                                            });
                                        }
                                    }
                                });
                                var store = Ext.create('Ext.data.Store', {
                                    fields: ['name', 'value'],
                                    data: data
                                });
                                me.setStore(store);
                            }
                        }
                    }
                }]
            }]
        }
    ]
})

/**
 * 将字符串或者数组按照逗号拆分为数组
 * @param str
 * @returns {Array}
 */
function split(str) {
    var array = new Array();
    while (true) {
        if (str instanceof Array) {
            str = str.join(",");
        }
        var index = str.indexOf(",");
        if (index == -1) {
            array.push(str);
            break;
        }
        var temp = str.substring(0, index);
        array.push(temp);
        str = str.substring(index + 1, str.length);
    }
    return array;
}
