Ext.define('App.management.pm.view.PmReportConfigurationFrame', {
    extend: 'App.management.pm.view.PmBaseFrame',
    alias: ['widget.PmReportConfigurationFrame'],
    requires: ["App.reportconfiguration.view.ProjectReportConfigurationList"],
    title: '报表模板配置',
    tabitems: [
        {
            xtype: 'ProjectReportConfigurationList'
        }]
})