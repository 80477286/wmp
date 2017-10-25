Ext.define('App.authorization.AuthorizationManagementFrame', {
    extend: 'App.commons.tab.BaseFrame',
    alias: ['widget.AuthorizationManagementFrame'],
    title: '授权管理',
    requires: ['App.authorization.resource.view.ResourceList', 'App.authorization.user.view.UserList', 'App.authorization.role.view.RoleList'],
    tabitems: [{
        xtype: 'ResourceList',
        border: false,
        title: '资源管理'
    }, {
        xtype: 'UserList',
        border: false,
        title: '用户管理'
    }, {
        xtype: 'RoleList',
        border: false,
        title: '角色管理'
    }]
})