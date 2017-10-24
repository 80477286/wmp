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
        formClass: 'App.reportconfiguration.view.ReportConfigurationWindow',
        save: '/report_configuration/save',
        get: '/report_configuration/get_by_id',
        del: '/report_configuration/deletes'
    }
});