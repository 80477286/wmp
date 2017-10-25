Ext.define('App.report.PmReportFrame', {
    extend: 'App.commons.tab.BaseFrame',
    alias: ['widget.PmReportFrame'],
    requires: ['App.report.iteration.view.IterationReportList','App.report.project.view.ProjectReportList'],
    title: '报表管理',
    tabitems: [{
        xtype: 'IterationReportList',
        border: false
    }, {
        xtype: 'ProjectReportList',
        border: false
    }]
})