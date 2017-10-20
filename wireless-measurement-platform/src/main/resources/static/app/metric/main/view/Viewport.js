Ext.define('App.metric.main.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: ['App.metric.main.view.MainNavbar', 'App.metric.main.view.MainFrame', 'App.metric.main.controller.ViewportController'],
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