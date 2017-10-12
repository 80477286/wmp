Ext.define('App.main.view.Viewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.Viewport',
    requires: ['App.main.view.Main', 'App.main.view.North', 'App.main.view.NavbarTree'],
    layout: 'border',
    minWidth: 1000, minHeight: 680,
    style: {overflow: 'auto'},
    items: [
        {
            xtype: 'North', region: 'north'
        }, {
            xtype: 'Main',
            region: 'center',
            width: '100%'
        }, {
            xtype: 'NavbarTree',
            rootVisible: false,
            region: 'west',
            width: 260,
            collapsible: true,
            header: false,
            split: true,
            collapseMode: 'mine'
        }
    ]
})