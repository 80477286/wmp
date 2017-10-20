Ext.define("App.reportconfiguration.kpiconfiguration.view.KpiConfigurationList", {
    extend: "Extend.grid.CrudGridPanel",
    alias: 'widget.KpiConfigurationList',
    requires: ['App.reportconfiguration.kpiconfiguration.viewmodel.KpiConfigurationViewModel'],
    viewModel: 'kpi_configuration_viewmodel',
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
        formClass: 'App.reportconfiguration.view.ReportConfigurationWindow',
        save: '/report_configuration/save',
        get: '/report_configuration/get_by_id',
        del: '/hrm/employee/delete'
    }
});