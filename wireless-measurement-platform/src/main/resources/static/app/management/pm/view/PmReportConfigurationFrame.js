Ext.define('App.management.pm.view.PmReportConfigurationFrame', {
    extend: 'App.commons.tab.BaseFrame',
    alias: ['widget.PmReportConfigurationFrame'],
    requires: ["App.reportconfiguration.view.ProjectReportConfigurationList"],
    title: '报表模板配置',
    tabitems: [
        {
            xtype: 'ProjectReportConfigurationList'
        }]
})