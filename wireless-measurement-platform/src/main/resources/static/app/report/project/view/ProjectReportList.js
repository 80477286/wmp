Ext.define('App.report.project.view.ProjectReportList', {
    extend: 'Extend.grid.CrudGridPanel',
    alias: 'widget.ProjectReportList',
    requires: ['App.report.project.model.ProjectReportViewModel'],
    viewModel: 'ProjectReportViewModel',
    border:false,
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
    extraParams: function () {
        return {
            'params.reportConfigurationType_eq': '项目度量',
            'params.project.id_eq': app.project.id
        }
    },
    editor: {
        formClazz: 'App.report.project.view.ProjectReportEditor',
        save: '/report/save',
        get: '/report/get_by_id',
        del: '/report/deletes',
        dataType: 'Report'
    }
});