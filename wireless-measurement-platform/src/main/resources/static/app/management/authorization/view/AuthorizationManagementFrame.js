Ext.define('App.management.authorization.view.AuthorizationManagementFrame', {
    extend: 'App.management.main.view.BaseFrame',
    alias: ['widget.AuthorizationManagementFrame'],
    title: '授权管理',
    requires: ['App.management.authorization.resource.view.ResourceList', 'App.management.authorization.user.view.UserList', 'App.management.authorization.role.view.RoleList'],
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