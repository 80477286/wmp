Ext.define('App.management.po.view.Viewport', {
    extend: 'Ext.tab.Panel',
    alias: ['widget.Viewport'],
    requires: ['App.project.PoProjectFrame'],
    ui: 'navigation',
    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,
    header: {
        layout: {align: 'stretchmax'},
        title: {text: '<a class="logo" style="height:46px;width:128px;display:block;"></a>', flex: 0}
    },
    tabBar: {flex: 1, layout: {align: 'stretch', overflowHandler: 'none'}},
    responsiveConfig: {tall: {headerPosition: 'top'}, wide: {headerPosition: 'left'}},

    defaults: {
        bodyPadding: 0,
        tabConfig: {
            plugins: 'responsive', responsiveConfig: {
                wide: {iconAlign: 'left', textAlign: 'left'}, tall: {iconAlign: 'top', textAlign: 'center', width: 120}
            }
        }
    },

    items: [{
        title: '运行中',
        xtype: 'PoProjectFrame'
    }]
})