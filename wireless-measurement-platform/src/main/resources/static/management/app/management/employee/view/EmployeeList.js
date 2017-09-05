Ext.define("App.management.employee.view.EmployeeList", {
    extend: "Extend.grid.CrudGridPanel",
    alias: 'widget.EmployeeList',
    requires: ['App.management.employee.viewmodel.EmployeeViewModel'],
    viewModel: 'employee_viewmodel',
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
        formClass: 'App.management.employee.view.EmployeeEditor',
        save: '/authorization/role?save',
        get: '/authorization/role?get_by_id',
        del: '/authorization/role?delete'
    }
});