Ext.define('App.reportconfiguration.view.CommonReportConfigurationList', {
    extend: 'Extend.grid.CrudGridPanel',
    alias: 'widget.CommonReportConfigurationList',
    requires: ['App.reportconfiguration.model.ReportConfigurationViewModel'],
    viewModel: 'ReportConfigurationViewModel',
    border: false,
    config: {
        pageable: false,
        tbar: {
            quickCreate: {
                hidden: true
            }, add: {hidden: true}, remove: {hidden: true}
        }
    },
    bind: {
        store: '{Query}',
        columns: '{columns}',
        search: '{search}'
    },
    editor: {
        formClass: 'App.reportconfiguration.view.ReportConfigurationEditorWindow',
        save: '/report_configuration/save',
        get: '/report_configuration/get_by_id',
        del: '/report_configuration/deletes'
    }
});