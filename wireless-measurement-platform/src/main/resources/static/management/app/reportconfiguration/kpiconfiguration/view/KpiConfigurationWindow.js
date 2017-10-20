Ext.define('App.reportconfiguration.kpiconfiguration.view.KpiConfigurationWindow', {
    extend: 'Extend.window.FormWindow',
    title: '添加指标信息',
    width: 300,
    height: 200,
    defaults: {
        columnWidth: 1,
        allowBlank: false,
        blankText: '不能为空'
    },
    items: [{
        xtype: 'textfield',
        name: 'name',
        fieldLabel: '指标名称',
        beforeLabelTextTpl : ['<span style="color:red;">*</span>']
    }, {
        xtype: 'textfield',
        name: 'dataType',
        fieldLabel: '类型',
        beforeLabelTextTpl : ['<span style="color:red;">*</span>']
    }, {
        xtype: 'textfield',
        name: 'field',
        fieldLabel: '字段名称',
        beforeLabelTextTpl : ['<span style="color:red;">*</span>']
    }, {
        xtype: 'textfield',
        name: 'expression',
        fieldLabel: '计算表达式',
        beforeLabelTextTpl : ['<span style="color:red;">*</span>']
    }, {
        xtype: 'textfield',
        name: 'format',
        fieldLabel: '日期格式',
        allowBlank: true
    }, {
        xtype: 'textfield',
        name: 'formatter',
        fieldLabel: '格式化方式',
        allowBlank: true
    }, {
        xtype: 'textfield',
        name: 'description',
        fieldLabel: '描述',
        allowBlank: true
    }],
    window: {
        buttons: {
            save: {
                text: '添加',
                handler: function () {
                    var me = this;
                    var form = me.up('window').down('panel');
                    var kpiConfiguration = form.kpiConfiguration;
                    if (form.getForm().isValid()) {
                        kpiConfiguration.getStore().insert(0, Ext.create(Ext.data.Model, form.getDatas()));
                        me.up('window').close();
                    }
                }
            }
        }
    }
});