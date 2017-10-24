Ext.define('App.management.project.report.view.ProjectReportList', {
    extend: 'Extend.grid.CrudGridPanel',
    alias: 'widget.ProjectReportList',
    requires: ['App.management.project.report.model.ProjectReportViewModel'],
    viewModel: 'ProjectReportViewModel',
    title: '项目度量报表',
    config: {
        tbar: {
            quickCreate: {
                hidden: true
            },
            add: {
                hidden: true
            }
        }
    },
    bind: {
        store: '{Query}',
        columns: '{columns}',
        search: '{search}'
    },
    extraParams: {'params.reportConfiguration.type_eq': '项目度量'},
    editor: {
        formClazz: 'App.management.project.report.view.ProjectReportEditor',
        save: '/report/save',
        get: '/report/get_by_id',
        del: '/report/deletes',
        dataType: 'Report'
    }
});