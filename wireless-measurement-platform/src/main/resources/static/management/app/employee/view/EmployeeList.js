Ext.define("App.employee.view.EmployeeList", {
    extend: "Extend.grid.CrudGridPanel",
    alias: 'widget.EmployeeList',
    requires: ['App.employee.viewmodel.EmployeeViewModel'],
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
        formClass: 'App.employee.view.EmployeeEditor',
        save: '/hrm/employee/save',
        get: '/hrm/employee/get_by_id',
        del: '/hrm/employee/delete'
    }
});