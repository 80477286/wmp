Ext.define('App.metric.project.view.PduReport', {
    extend: 'Ext.tab.Panel',
    alias: ['widget.PduReport'],
    items: [
        {
            xtype: 'Report',
            title: 'PDU度量',
            listeners: {
                afterrender: function () {
                    var me = this;
                    // me.load('report/queryReport', {
                    //     'params.projectId': me.up().node.data.id,
                    //     'params.reportConfigurationType': '迭代度量',
                    //     'params.groupName': '需求'
                    // });
                }
            },
        },
        {
            xtype: 'Report',
            title: '软件开发',
            listeners: {
                afterrender: function () {
                    var me = this;
                    // me.load('report/queryReport', {
                    //     'params.projectId': me.up().node.data.id,
                    //     'params.reportConfigurationType': '迭代度量',
                    //     'params.groupName': '需求'
                    // });
                }
            },
        },
        {
            xtype: 'Report',
            title: '硬件测试',
            listeners: {
                afterrender: function () {
                    var me = this;
                    // me.load('report/queryReport', {
                    //     'params.projectId': me.up().node.data.id,
                    //     'params.reportConfigurationType': '迭代度量',
                    //     'params.groupName': '需求'
                    // });
                }
            },
        }]
})