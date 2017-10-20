Ext.define('App.reportconfiguration.kpiconfiguration.view.KpiConfigurationWindow', {
    extend: 'Extend.window.FormWindow',
    title: '添加指标信息',
    width: 300,
    height: 200,
    defaults: {
        columnWidth: 1
    },
    items: [{
        xtype: 'textfield',
        name: 'name',
        fieldLabel: '指标名称'
    }, {
        xtype: 'textfield',
        name: 'dataType',
        fieldLabel: '类型'
    }, {
        xtype: 'textfield',
        name: 'field',
        fieldLabel: '字段名称'
    }, {
        xtype: 'textfield',
        name: 'expression',
        fieldLabel: '计算表达式'
    }, {
        xtype: 'textfield',
        name: 'format',
        fieldLabel: '日期格式'
    }, {
        xtype: 'textfield',
        name: 'formatter',
        fieldLabel: '格式化方式'
    }, {
        xtype: 'textfield',
        name: 'description',
        fieldLabel: '描述'
    }],
    window: {
            buttons: {
                save: {
                    text: '添加',
                    handler: function () {
                        var me = this;
                        var form = me.up('window').down('panel');
                        var kpiConfiguration = form.kpiConfiguration;
                        kpiConfiguration.getStore().insert(0, Ext.create(Ext.data.Model,form.getDatas()));
                        me.up('window').close();
                    }
                }
            }
    }
});