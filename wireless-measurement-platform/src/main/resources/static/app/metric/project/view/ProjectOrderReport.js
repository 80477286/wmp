Ext.define('App.metric.project.view.ProjectOrderReport', {
    extend: 'Ext.tab.Panel',
    alias: ['widget.ProjectOrderReport'],
    requires: ['App.projectorder.view.ProjectOrderFormPanel'],
    items: [{
        xtype: 'ProjectOrderFormPanel'
    },
        {
            xtype: 'Report',
            title: 'PO度量',
            listeners: {
                afterrender: function () {
                    var me = this;
                    me.load('report/query_report', {
                        'params.projectOrder.id': me.up().node.data.id,
                        'params.reportConfigurationType': '项目度量'
                    });
                }
            }
        }]
})

window.substringTime = function (time) {
    return time.substring(0, time.indexOf('T'));
}