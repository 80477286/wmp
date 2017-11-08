Ext.define('App.report.PmProjectReportFrame', {
    extend: 'App.commons.tab.BaseFrame',
    alias: ['widget.PmProjectReportFrame'],
    requires: ['App.report.project.view.ProjectReportList'],
    title: '项目报表管理',
    tabitems: [{
        xtype: 'ProjectReportList'
    }]
})