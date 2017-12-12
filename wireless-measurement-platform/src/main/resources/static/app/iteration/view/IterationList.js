Ext.define('App.iteration.view.IterationList', {
    extend: 'Extend.grid.CrudGridPanel',
    alias: 'widget.IterationList',
    requires: ['App.iteration.viewmodel.IterationViewModel'],
    viewModel: 'IterationViewModel',
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
        formClazz: 'App.iteration.view.IterationEditor',
        save: 'iteration/save',
        get: 'iteration/get_by_id',
        del: 'iteration/deletes',
        model:'App.iteration.model.IterationModel'
    }
});