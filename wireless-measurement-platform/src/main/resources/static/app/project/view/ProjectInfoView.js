Ext.define('App.project.view.ProjectInfoView', {
    extend: "Extend.grid.ExtendGridPanel",
    alias: ['widget.ProjectInfoView'],
    requires: ['App.project.model.ProjectViewModel'],
    viewModel: 'ProjectViewModel',
    forceFit: false,
    scrollable: true,
    bind: {
        store: '{Query}',
        columns: '{columns}',
        search: '{search}'
    }
})