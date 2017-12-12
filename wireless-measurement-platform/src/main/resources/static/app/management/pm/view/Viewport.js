Ext.define('App.management.pm.view.Viewport', {
    extend: 'Ext.tab.Panel',
    alias: ['widget.Viewport'],
    requires: ['App.management.pm.view.PmIterationReportFrame',
        'App.management.pm.view.PmReportConfigurationFrame',
        'App.management.pm.view.PmProjectReportFrame',
        'App.management.pm.view.IterationPlanFrame'],
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
        xtype: 'PmReportConfigurationFrame',
        iconCls: 'fa-user'
    }, {
        xtype: 'PmIterationReportFrame',
        iconCls: 'fa-user'
    }, {
        xtype: 'PmProjectReportFrame',
        iconCls: 'fa-user'
    }, {
        xtype: 'IterationPlanFrame',
        title: '迭代计划管理',
        iconCls: 'fa-user'
    }
    ]
})