Ext.define('App.main.view.Main', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.Main',


    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
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
        title: 'Home',
        iconCls: 'fa-home'
    }, {
        title: 'Users',
        iconCls: 'fa-user',
        html: '{loremIpsum1}'
    }, {
        title: 'Groups',
        iconCls: 'fa-users',
        html: '{loremIpsum2}'
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        html: '{loremIpsum3}'
    }]
})