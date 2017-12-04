Ext.define('App.projectorder.view.ProjectOrderInfoGrid', {
    extend: "Extend.grid.ExtendGridPanel",
    alias: ['widget.ProjectOrderInfoGrid'],
    requires: ['App.projectorder.model.ProjectOrderViewModel'],
    viewModel: 'ProjectOrderViewModel',
    forceFit: false,
    scrollable: true,
    bind: {
        store: '{Query}',
        columns: '{columns}',
        search: '{search}'
    }
})