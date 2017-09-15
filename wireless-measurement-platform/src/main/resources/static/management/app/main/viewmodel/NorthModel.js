Ext.define('App.main.viewmodel.NorthModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.NorthModel',
    data: {
        user: {
            name: '加载中...'
        },
        menus: [{
            name: '人力资源管理',
            iconCls: 'menu_item_role_managument',handler:function(){window.location.href='/'}
        },{
            clazz: 'App.employee.view.EmployeeList',
            name: '人力资源管理',
            iconCls: 'menu_item_role_managument'
        }, {
            clazz: 'App.version.view.VersionList',
            name: '版本管理',
            iconCls: 'menu_item_role_managument'
        }, {
            name: '授权管理',
            iconCls: 'menu_item_role_managument',
            menus: [{
                name: '用户管理',
                clazz: 'App.authorization.user.view.UserList',
                iconCls: 'menu_item_user_managument'
            }, {
                name: '资源管理',
                clazz: 'App.authorization.resource.view.ResourceList',
                iconCls: 'menu_item_resource_managument'
            }, {
                name: '角色管理',
                clazz: 'App.authorization.role.view.RoleList',
                iconCls: 'menu_item_role_managument'
            }]
        }]
    }
})