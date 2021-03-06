Ext.define('App.management.administrator.view.Viewport', {
    extend: 'Ext.tab.Panel',
    alias: ['widget.Viewport'],
    requires: [
        'App.hrm.employee.view.EmployeeManagementFrame',
        'App.authorization.AuthorizationManagementFrame',
        'App.organization.AdministratorOrganizationFrame'
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
        xtype: 'AuthorizationManagementFrame',
        iconCls: 'fa-user'
    }, {
        title: '组织管理',
        xtype: 'AdministratorOrganizationFrame',
        iconCls: 'fa-user'
    }, {
        title: '人力管理',
        xtype: 'EmployeeManagementFrame',
        iconCls: 'fa-user'
    }]
})