Ext.define('App.management.project.view.ProjectManagementFrame', {
    extend: 'App.management.main.view.BaseFrame',
    alias: ['widget.ProjectManagementFrame'],
    title: '项目管理',
    requires: ['App.management.project.report.view.ReportList'],
    tabitems: [{
        xtype: 'ReportList',
        border: false
    }, {
        title: '需求管理'
    }, {
        title: 'Settings'
    }]
})