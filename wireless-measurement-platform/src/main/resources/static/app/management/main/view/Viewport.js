Ext.define('App.management.main.view.Viewport', {
    extend: 'Ext.tab.Panel',
    alias: ['widget.MainFrame'],
    requires: [],

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            text:'<a class="logo" style="height:46px;width:128px;display:block;"></a>',
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
            headerPosition: 'top'
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
        title: 'UsersUsersUsersUsers',
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