Ext.define('App.metric.project.view.IterationReport', {
    extend: 'Ext.tab.Panel',
    alias: ['widget.IterationReport'],
    items: [
        {
            xtype: 'Report',
            title: '需求',
            listeners: {
                afterrender: function () {
                    var me = this;
                    me.load('report/queryReport', {
                        'params.projectId': me.up().node.data.id,
                        'params.reportConfigurationType': '迭代度量',
                        'params.groupName': '需求'
                    });
                }
            },
        },
        {title: '设计'},
        {title: '开发'},
        {title: '测试'},
        {title: '构建'},
        {title: '转测试'},
        {title: '迭代管理'},
        {title: '工程能力'},
        {title: '验收'},
        {title: '客户反馈'}]
})