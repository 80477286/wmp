Ext.define('App.management.pm.view.PmProjectReportFrame', {
    extend: 'App.management.pm.view.PmBaseFrame',
    alias: ['widget.PmProjectReportFrame'],
    requires: ['App.report.project.view.ProjectReportList'],
    title: '项目报表管理',
    tabitems: [{
        xtype: 'ProjectReportList'
    }]
})