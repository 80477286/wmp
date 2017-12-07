Ext.define('App.hrm.employee.view.EmployeeInfoCurdView', {
    extend: "Extend.grid.CrudGridPanel",
    alias: ['widget.EmployeeInfoCurdView'],
    requires: ['App.hrm.employee.model.EmployeeViewModel'],
    viewModel: 'EmployeeViewModel',
    bind: {
        store: '{Query}',
        columns: '{columns}',
        search: '{search}'
    },
    editor: {
        formClazz: 'App.hrm.employee.view.EmployeeInfoEditor',
        save: '/hrm/employee/save',
        get: '/hrm/employee/get_by_id',
        del: '/hrm/employee/deletes'
    }
})