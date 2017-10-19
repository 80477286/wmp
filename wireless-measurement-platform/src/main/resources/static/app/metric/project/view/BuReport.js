Ext.define('App.metric.project.view.BuReport', {
    extend: 'Ext.tab.Panel',
    alias: ['widget.BuReport'],
    items: [
        {
            xtype: 'Report',
            title: 'BU度量',
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