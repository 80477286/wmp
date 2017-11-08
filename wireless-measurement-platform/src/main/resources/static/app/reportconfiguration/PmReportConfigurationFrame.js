Ext.define('App.reportconfiguration.PmReportConfigurationFrame', {
    extend: 'App.commons.tab.BaseFrame',
    alias: ['widget.PmReportConfigurationFrame'],
    requires: ["App.reportconfiguration.view.ReportConfigurationList"],
    title: '报表模板配置',
    tabitems: [
        {
            xtype: 'ReportConfigurationList',
            bind: {
                store: '{QueryByProject}',
                columns: '{projectColumns}',
                search: '{search}'
            },
            extraParams: function () {
                return {
                    'params.type_like': '迭代度量-%',
                    'params.projectId': app.project.id
                }
            }
        }
    ]
})