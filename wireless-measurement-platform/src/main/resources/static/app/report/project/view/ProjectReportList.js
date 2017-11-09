Ext.define('App.report.project.view.ProjectReportList', {
    extend: 'Extend.grid.CrudGridPanel',
    alias: 'widget.ProjectReportList',
    requires: ['App.report.project.model.ProjectReportViewModel'],
    viewModel: 'ProjectReportViewModel',
    border: false,
    config: {
        reportConfigurationType: '项目度量',
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
    extraParams: function () {
        return {
            'params.reportConfigurationType_eq': this.reportConfigurationType,
            'params.project.id_eq': app.project.id
        }
    },
    editor: {
        formClazz: 'App.report.project.view.ProjectReportEditor',
        save: '/report/save',
        get: '/report/get_by_id',
        del: '/report/deletes',
        dataType: 'Report',
        model: 'App.report.model.ReportModel'
    },
    addHandler: function () {
        var project = app.project;
        this.editHandler(null, false, {
            project: {id: project.id},
            projectOrder: {id: project.parent.id},
            pdu: {id: project.parent.parent.id},
            du: {id: project.parent.parent.parent.id},
            bu: {id: project.parent.parent.parent.parent.id},
            reportConfigurationType: this.reportConfigurationType
        });
    }
});