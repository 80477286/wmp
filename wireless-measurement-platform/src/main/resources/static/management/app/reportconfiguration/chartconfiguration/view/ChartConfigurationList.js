Ext.define("App.reportconfiguration.chartconfiguration.view.ChartConfigurationList", {
    extend: "Extend.grid.CrudGridPanel",
    alias: 'widget.ChartConfigurationList',
    requires: ['App.reportconfiguration.chartconfiguration.viewmodel.ChartConfigurationViewModel'],
    viewModel: 'chart_configuration_viewmodel',
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