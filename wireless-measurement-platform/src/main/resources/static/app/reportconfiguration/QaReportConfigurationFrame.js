Ext.define('App.reportconfiguration.QaReportConfigurationFrame', {
    extend: 'App.commons.tab.BaseFrame',
    alias: ['widget.QaReportConfigurationFrame'],
    requires: ["App.reportconfiguration.view.ReportConfigurationForm"],
    title: '报表配置',
    defaults: {},
    tabitems: [
        {
            xtype: 'ReportConfigurationForm',
            title: 'BU报表配置 ',
            listeners: {
                afterrender: function () {
                    this.load({url: '/report_configuration/get_by_id', params: {id: "INTERATION1"}});
                }
            },
            tbar: ['->', {
                xtype: 'button',
                text: '保存',
                handler: function () {
                    var me = this;
                    var form = me.up('ReportConfigurationForm');
                    form.submit({
                        url: '/report_configuration/save',
                        method: 'POST',
                        success: function () {
                            Ext.MessageBox.alert('提示', '保存成功');
                        },
                        failure: function () {
                            Ext.MessageBox.alert('提示', '保存失败');
                        }
                    });

                }
            }]
        },
        {
            xtype: 'ReportConfigurationForm',
            title: 'DU报表配置 ',
            listeners: {
                afterrender: function () {
                    this.load({url: '/report_configuration/get_by_id', params: {id: "DU"}});
                }
            }
        },
        {
            xtype: 'ReportConfigurationForm',
            title: 'PDU报表配置 ',
            listeners: {
                afterrender: function () {
                    this.load({url: '/report_configuration/get_by_id', params: {id: "PDU"}});
                }
            }
        },
        {
            xtype: 'ReportConfigurationForm',
            title: 'PO报表配置 ',
            listeners: {
                afterrender: function () {
                    this.load({url: '/report_configuration/get_by_id', params: {id: "PO"}});
                }
            }
        },
        {
            xtype: 'ReportConfigurationForm',
            title: '项目报表配置 ',
            listeners: {
                afterrender: function () {
                    this.load({url: '/report_configuration/get_by_id', params: {id: "PROJECT"}});
                }
            }
        },
        {
            xtype: 'ReportConfigurationForm',
            title: '迭代报表配置 ',
            listeners: {
                afterrender: function () {
                    this.load({url: '/report_configuration/get_by_id', params: {id: "INTERATION1"}});
                }
            }
        }
    ]
})