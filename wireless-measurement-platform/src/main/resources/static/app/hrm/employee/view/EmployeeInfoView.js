Ext.define('App.hrm.employee.view.EmployeeInfoView', {
    extend: "Extend.grid.ExtendGridPanel",
    alias: ['widget.EmployeeInfoView'],
    requires: ['App.hrm.employee.model.EmployeeViewModel'],
    viewModel: 'EmployeeViewModel',
    bind: {
        store: '{Query}',
        columns: '{columns}',
        search: '{search}'
    }
})