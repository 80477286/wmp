Ext.define('App.main.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'border',
    alias: 'widget.Viewport', requires: ['App.main.view.Main'],
    items: [ {
        xtype: 'Main', region: 'center'
    }]
})