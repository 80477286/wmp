Ext.define('App.metric.project.view.DuReport', {
    extend: 'Ext.tab.Panel',
    alias: ['widget.DuReport'],
    items: [
        {
            xtype: 'Report',
            title: 'DU度量',
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