Ext.define('App.management.qa.view.QaReportConfigurationFrame', {
    extend: 'App.commons.tab.BaseFrame',
    alias: ['widget.QaReportConfigurationFrame'],
    requires: ['App.reportconfiguration.view.ReportConfigurationEditorPanel', "App.reportconfiguration.view.CommonReportConfigurationList"],
    title: '报表配置',
    defaults: {},
    tabitems: [
        {
            xtype: 'ReportConfigurationEditorPanel',
            title: 'BU报表配置 ',
            listeners: {
                afterrender: function () {
                    this.load({url: '/report_configuration/get_by_id', params: {id: "BU"}});
                }
            }
        },
        {
            xtype: 'ReportConfigurationEditorPanel',
            title: 'DU报表配置 ',
            listeners: {
                afterrender: function () {
                    this.load({url: '/report_configuration/get_by_id', params: {id: "DU"}});
                }
            }
        },
        {
            xtype: 'ReportConfigurationEditorPanel',
            title: 'PDU报表配置 ',
            listeners: {
                afterrender: function () {
                    this.load({url: '/report_configuration/get_by_id', params: {id: "PDU"}});
                }
            }
        },
        {
            xtype: 'ReportConfigurationEditorPanel',
            title: 'PO报表配置 ',
            listeners: {
                afterrender: function () {
                    this.load({url: '/report_configuration/get_by_id', params: {id: "PO"}});
                }
            }
        },
        {
            xtype: 'ReportConfigurationEditorPanel',
            title: '项目报表配置 ',
            listeners: {
                afterrender: function () {
                    this.load({url: '/report_configuration/get_by_id', params: {id: "PROJECT"}});
                }
            }
        },
        {
            xtype: 'CommonReportConfigurationList',
            title: '迭代报表 ',
            extraParams: {'params.type_like': '迭代度量-%'}
        }
    ]
})