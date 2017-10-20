Ext.define("App.reportconfiguration.view.ReportConfigurationList", {
    extend: "Extend.grid.CrudGridPanel",
    alias: 'widget.ReportConfigurationList',
    requires: ['App.reportconfiguration.viewmodel.ReportConfigurationViewModel'],
    viewModel: 'report_configuration_viewmodel',
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