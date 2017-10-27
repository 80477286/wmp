Ext.define('App.reportconfiguration.CommonReportConfigurationFrame', {
    extend: 'App.commons.tab.BaseFrame',
    alias: ['widget.CommonReportConfigurationFrame'],
    requires: ["App.reportconfiguration.view.ReportConfigurationForm"],
    title: '报表配置',
    tabitems: [
        {
            xtype: 'ReportConfigurationForm',
            title: 'BU报表配置 ',
            listeners: {
                afterrender: function () {
                    this.load({url: '/report_configuration/get_by_id', params: {id: 1}});
                }
            }
        },
        {title: 'DU报表配置 '},
        {title: 'PDU报表配置 '},
        {title: 'PO报表配置 '},
        {title: '项目报表配置 '},
        {title: '迭代报表配置 '}
    ]
})