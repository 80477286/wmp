Ext.define('App.reportconfiguration.view.ReportConfigurationEditorPanel', {
    extend: 'App.reportconfiguration.view.BaseReportConfigurationEditor',
    alias: ['widget.ReportConfigurationEditorPanel'],
    resetBySave:false,
    tbar: ['->', {
        xtype: 'button',
        text: '保存',
        handler: function () {
            var me = this;
            Extend.Msg.confirm('确认', '请确认你是否真的要修改此模板配置?', null, function (opt) {
                if (opt == 'yes') {
                    var form = me.up('ReportConfigurationEditorPanel');
                    form.save();
                }
            });
        }
    }, {
        xtype: 'button',
        text: '重置',
        handler: function () {
            var me = this;
            var form = me.up('ReportConfigurationEditorPanel');
            form.reload();
        }
    }]
})