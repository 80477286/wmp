Ext.define('App.main.view.Viewport', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.Viewport',
    requires: ['App.main.view.MainNavbar', 'App.main.view.MainFrame', 'App.main.controller.ViewportController'],
    controller: 'ViewportController',
    layout: 'border',
    minWidth: 1000,
    minHeight: 680,
    style: {overflow: 'auto'},
    items: [
        {
            xtype: 'MainNavbar',
            region: 'north'
        },
        {
            xtype: 'MainFrame',
            region: 'center'
        }
    ]
})