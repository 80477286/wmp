Ext.define('App.report.iteration.view.IterationReportList', {
    extend: 'Extend.grid.CrudGridPanel',
    alias: 'widget.IterationReportList',
    requires: ['App.report.iteration.model.IterationReportViewModel'],
    viewModel: 'IterationReportViewModel',
    title: '迭代度量报表',
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
    getExtraParams: function () {
        return {
            'params.reportConfigurationType_like': '迭代度量-%',
            'params.project.id_eq': app.project.id
        }
    },
    editor: {
        formClazz: 'App.report.iteration.view.IterationReportEditor',
        save: '/report/save',
        get: '/report/get_by_id',
        del: '/report/deletes',
        dataType: 'Report',
        model: 'App.iteration.model.IterationModel'
    },
    addHandler: function () {
        this.editHandler(null, false, {});
    },
    listeners: {
        load: function ($this, records) {
            console.log('log')
        }
    }
});