Ext.define('App.management.project.view.ProjectManagementFrame', {
    extend: 'App.management.main.view.BaseFrame',
    alias: ['widget.ProjectManagementFrame'],
    requires: ['App.management.project.report.view.IterationReportList', 'App.management.project.report.view.ProjectReportList'],
    title: '项目管理',
    tabitems: [{
        xtype: 'IterationReportList',
        border: false
    }, {
        xtype: 'ProjectReportList',
        border: false
    }, {
        title: 'Settings'
    }]
})