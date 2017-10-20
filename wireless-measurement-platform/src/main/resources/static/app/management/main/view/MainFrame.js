Ext.define('App.management.main.view.MainFrame', {
    extend: 'Ext.tab.Panel',
    alias: ['widget.MainFrame'],
    requires: [],

    ui: 'navigation',

    tabBarHeaderPosition: 0,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            text: '',
            flex: 0
        }
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'left'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Users',
        iconCls: 'fa-user',
        html: '{loremIpsum}'
    }, {
        title: 'Groups',
        iconCls: 'fa-users',
        html: '{loremIpsum}'
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        html: '{loremIpsum}'
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        html: '{loremIpsum}'
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        html: '{loremIpsum}'
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        html: '{loremIpsum}'
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        html: '{loremIpsum}'
    }]
})