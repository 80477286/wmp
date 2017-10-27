Ext.define("App.reportconfiguration.chartconfiguration.view.SeriesConfigurationWindow", {
    extend: 'Extend.window.FormWindow',
    title: '添加Series配置信息',
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
        fieldLabel: '类型',
        beforeLabelTextTpl: ['<span style="color:red;">*</span>']
    }, {
        name: 'xField',
        fieldLabel: 'xField',
        beforeLabelTextTpl: ['<span style="color:red;">*</span>']
    }, {
        name: 'xFieldAlias',
        fieldLabel: 'xFieldAlias',
        beforeLabelTextTpl: ['<span style="color:red;">*</span>']
    }, {
        name: 'yFields',
        fieldLabel: 'yFields',
        beforeLabelTextTpl: ['<span style="color:red;">*</span>']
    }, {
        name: 'yFieldAliases',
        beforeLabelTextTpl: ['<span style="color:red;">*</span>'],
        fieldLabel: 'yFieldAliases'
    }, {
        name: 'axis',
        fieldLabel: 'axis',
        beforeLabelTextTpl: ['<span style="color:red;">*</span>']
    }],
    window: {
        buttons: {
            save: {
                text: '添加',
                handler: function () {
                    var me = this;
                    var form = me.up('window').down('panel');
                    var seriesConfiguration = form.seriesConfiguration;
                    if (form.getForm().isValid()) {
                        seriesConfiguration.getStore().insert(0, Ext.create(Ext.data.Model, form.getDatas()));
                        me.up('window').close();
                    }
                }
            }
        }
    }

})