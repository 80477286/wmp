Ext.define("App.reportconfiguration.chartconfiguration.view.AxisConfigurationWindow", {
    extend: 'Extend.window.FormWindow',
    title: '添加轴配置信息',
    width: 300,
    height: 200,
    defaults: {
        columnWidth: 1,
        allowBlank: false,
        blankText: '不能为空',
        xtype: 'textfield'
    },
    items: [{
        name: 'type',
        fieldLabel: '轴类型',
        beforeLabelTextTpl: ['<span style="color:red;">*</span>']
    }, {
        name: 'position',
        fieldLabel: '轴的位置',
        beforeLabelTextTpl: ['<span style="color:red;">*</span>']
    }, {
        name: 'fields',
        fieldLabel: '字段',
        beforeLabelTextTpl: ['<span style="color:red;">*</span>']
    }, {
        name: 'title',
        fieldLabel: '标题',
        beforeLabelTextTpl: ['<span style="color:red;">*</span>']
    }, {
        name: 'fieldAliases',
        fieldLabel: '字段别名',
        allowBlank: true
    }],
    window: {
        buttons: {
            save: {
                text: '添加',
                handler: function () {
                    var me = this;
                    var form = me.up('window').down('panel');
                    var axisConfiguration = form.axisConfiguration;
                    if (form.getForm().isValid()) {
                        axisConfiguration.getStore().insert(0, Ext.create(Ext.data.Model, form.getDatas()));
                        me.up('window').close();
                    }
                }
            }
        }
    }
})