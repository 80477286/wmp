Ext.define('App.management.main.view.Viewport', {
    extend: 'Ext.tab.Panel',
    alias: ['widget.Viewport'],
    requires: [
        'App.management.project.view.ProjectManagementFrame',
        'App.management.version.view.VersionManagementFrame',
        'App.management.authorization.view.AuthorizationManagementFrame',
        'App.management.employee.view.EmployeeManagementFrame',
        'App.management.metric.view.MetricConfigurationFrame',
        'App.management.basicdata.view.BasicDataFrame'
    ],
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
        xtype: 'ProjectManagementFrame',
        iconCls: 'fa-user'
    }, {
        xtype: 'EmployeeManagementFrame',
        iconCls: 'fa-users'
    }, {
        xtype: 'VersionManagementFrame',
        iconCls: 'fa-users'
    }, {
        xtype: 'MetricConfigurationFrame',
        iconCls: 'fa-cog'
    }, {
        xtype: 'BasicDataFrame',
        iconCls: 'fa-cog'
    }, {
        xtype: 'AuthorizationManagementFrame',
        iconCls: 'fa-cog'
    }]
})