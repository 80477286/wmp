Ext.define('App.version.view.VersionList', {
    extend: 'Extend.grid.CrudGridPanel',
    alias: 'widget.VersionList',
    requires: ['App.version.viewmodel.VersionViewModel',
        'App.version.model.VersionModel'],
    viewModel: 'VersionViewModel',
    bind: {
        store: '{Query}',
        columns: '{columns}',
        search: '{search}'
    },
    config: {
        tbar: {
            quickCreate: {
                hidden: true
            }
        }
    },
    editor: {
        formClazz: 'App.version.view.VersionEditor',
        save: '/vm/version/save',
        remove: '/vm/version/deletes',
        get: '/vm/version/get_by_id',
        model: 'App.version.model.VersionModel'
    }
});