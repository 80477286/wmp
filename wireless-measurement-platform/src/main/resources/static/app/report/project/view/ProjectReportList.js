Ext.define('App.report.project.view.ProjectReportList', {
    extend: 'Extend.grid.CrudGridPanel',
    alias: 'widget.ProjectReportList',
    requires: ['App.report.project.model.ProjectReportViewModel'],
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
        formClazz: 'App.report.project.view.ProjectReportEditor',
        save: '/report/save',
        get: '/report/get_by_id',
        del: '/report/deletes',
        dataType: 'Report'
    }
});