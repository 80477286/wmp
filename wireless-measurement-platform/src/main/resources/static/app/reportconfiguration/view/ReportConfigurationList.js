Ext.define("App.reportconfiguration.view.ReportConfigurationList", {
    extend: "Extend.grid.CrudGridPanel",
    alias: 'widget.ReportConfigurationList',
    requires: ['App.reportconfiguration.model.ReportConfigurationViewModel'],
    viewModel: 'ReportConfigurationViewModel',
    config: {
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
    extraParams: {'params.type_like': '迭代度量-%'},
    editor: {
        formClass: 'App.reportconfiguration.view.ReportConfigurationEditorWindow',
        save: '/report_configuration/save',
        get: '/report_configuration/get_by_id',
        del: '/report_configuration/deletes'
    }
});