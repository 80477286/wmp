Ext.define('App.main.view.North', {
    extend: 'Ext.panel.Panel',
    alias: ['widget.North'],
    requires: ['App.main.view.BreadCrumb', 'App.main.view.MenuHeader'],
    layout: 'vbox',
    items: [{
        xtype: 'MenuHeader',
        width:'100%',
        height: 46
    }, {
        xtype: 'BreadCrumb',
        width:'100%',
        height: 30
    }]
})