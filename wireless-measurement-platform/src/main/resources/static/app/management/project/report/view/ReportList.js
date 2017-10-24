Ext.define('App.management.project.report.view.ReportList', {
    extend: 'Extend.grid.CrudGridPanel',
    alias: 'widget.ReportList',
    requires: ['App.management.project.report.ReportViewModel'],
    viewModel: 'ReportViewModel',
    title: '报表管理',
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
        formClazz: 'App.management.project.report.view.ReportEditor',
        save: '/report/save',
        get: '/report/get_by_id',
        del: '/report/deletes',
        dataType: 'Report'
    }
});