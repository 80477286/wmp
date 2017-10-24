Ext.define('App.management.project.report.view.IterationReportList', {
    extend: 'Extend.grid.CrudGridPanel',
    alias: 'widget.IterationReportList',
    requires: ['App.management.project.report.model.IterationReportViewModel'],
    viewModel: 'IterationReportViewModel',
    title: '迭代度量报表',
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
    extraParams: {'params.reportConfiguration.type_eq': '迭代度量'},
    editor: {
        formClazz: 'App.management.project.report.view.IterationReportEditor',
        save: '/report/save',
        get: '/report/get_by_id',
        del: '/report/deletes',
        dataType: 'Report'
    }
});