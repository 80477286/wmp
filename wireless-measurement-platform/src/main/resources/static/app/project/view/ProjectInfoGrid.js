Ext.define('App.project.view.ProjectInfoGrid', {
    extend: "Extend.grid.ExtendGridPanel",
    alias: ['widget.ProjectInfoGrid'],
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