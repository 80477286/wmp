Ext.define('App.projectorder.ProjectOrderInfoView', {
    extend: 'Ext.tab.Panel',
    alias: ['widget.ProjectOrderInfoView'],
    requires: ['App.project.view.ProjectInfoGrid', 'App.projectorder.view.ProjectOrderInfoGrid'],
    items: [
        {
            title: 'PO列表', xtype: 'ProjectOrderInfoGrid'
        },
        {
            title: '项目列表', xtype: 'ProjectInfoGrid'
        }]
})