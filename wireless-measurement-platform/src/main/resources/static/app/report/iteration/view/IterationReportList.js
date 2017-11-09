Ext.define('App.report.iteration.view.IterationReportList', {
    extend: 'Extend.grid.CrudGridPanel',
    alias: 'widget.IterationReportList',
    requires: ['App.report.iteration.model.IterationReportViewModel'],
    viewModel: 'IterationReportViewModel',
    border:false,
    config: {
        tbar: {
            quickCreate: {
                hidden: true
            }
        }
    },
    extraParams: function () {
        return {
            'params.reportConfigurationType_eq': this.reportConfigurationType,
            'params.project.id_eq': app.project.id
        }
    },
    bind: {
        store: '{Query}',
        columns: '{columns}',
        search: '{search}'
    },
    editor: {
        formClazz: 'App.report.iteration.view.IterationReportEditor',
        save: '/report/save',
        get: '/report/get_by_id',
        del: '/report/deletes',
        dataType: 'Report',
        model:'App.report.model.ReportModel'
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
    },
    listeners: {
        load: function ($this, records) {
            console.log('log')
        }
    }
});