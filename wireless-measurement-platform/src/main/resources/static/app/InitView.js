Ext.define('App.InitView', {
    extend: 'Ext.panel.Panel',
    alias: ['widget.InitView'],
    bodyStyle:'background-color:#000;',
    listeners: {
        afterrender: function () {
            var me = this;
            Ext.defer(function () {
                me.mask('初始化中，请稍候...');
            });
        }
    }
})