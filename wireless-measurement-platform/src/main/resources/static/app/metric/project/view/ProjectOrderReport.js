Ext.define('App.metric.project.view.ProjectOrderReport', {
    extend: 'Ext.tab.Panel',
    alias: ['widget.ProjectOrderReport'],
    requires: ['App.projectorder.view.ProjectOrderFormPanel'],
    items: [{
        title: 'PO信息',
        xtype: 'panel',
        items: [{
            xtype: 'ProjectOrderFormPanel'
        }],
        listeners: {
            afterrender: function () {
                var me = this;
                var formpanel = me.down('ProjectOrderFormPanel');
                formpanel.load({
                    url: 'projectorder/edit',
                    params: {
                        'id': me.up().node.data.id
                    },
                    success: function (form, result, data) {
                        formpanel.down('[name=parent.name]').setValue(result.result.data.parent.name);
                        var startTime = result.result.data.startTime;
                        var planStartTime = result.result.data.planStartTime;
                        var endTime = result.result.data.endTime;
                        if (startTime != null) {
                            formpanel.down('[name=startTime]').setValue(substringTime(startTime));
                        }
                        if (planStartTime != null) {
                            formpanel.down('[name=planStartTime]').setValue(substringTime(planStartTime));
                        }
                        if (endTime != null) {
                            formpanel.down('[name=endTime]').setValue(substringTime(endTime));
                        }
                    }
                });
            }
        }
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
            },
        }]
})

function substringTime(time) {
    return time.substring(0, time.indexOf('T'));
}