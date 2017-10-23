Ext.define("App.management.authorization.role.view.RoleList", {
    extend: "Extend.grid.CrudGridPanel",
    alias: 'widget.RoleList',
    requires: ['App.management.authorization.role.controller.RoleController',
        'App.management.authorization.role.viewmodel.RoleViewModel'],
    controller: 'role_controller',
    viewModel: 'role_viewmodel',
    config: {
        tbar: {
            quickCreate: {
                hidden: true
            }
        }
    },
    bind: {
        store: '{Query}',
        columns: '{columns}',
        search: '{search}'
    },
    editor: {
        formClazz: 'App.management.authorization.role.view.RoleEditor',
        save: '/authorization/role/save',
        get: '/authorization/role/get_by_id',
        del: '/authorization/role/delete'
    }
});