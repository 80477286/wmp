Ext.define('App.metric.project.view.ProjectOrderReport', {
    extend: 'Ext.tab.Panel',
    alias: ['widget.ProjectOrderReport'],
    items: [
        {
            xtype: 'Report',
            title: 'PO度量',
            listeners: {
                afterrender: function () {
                    var me = this;
                    me.load('report/queryReport', {
                        'params.projectOrder.id': me.up().node.data.id,
                        'params.reportConfiguration.type': 'PO度量'
                    });
                }
            },
        }]
})