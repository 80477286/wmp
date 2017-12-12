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
        model: 'App.authorization.user.UserModel',
        formClazz: 'App.authorization.user.view.UserEditor',
        save: 'authorization/user/save',
        get: 'authorization/user/get_by_id',
        del: 'authorization/user/deletes',
        dataType: 'User'
    }
});