Ext.define('App.metric.project.view.IterationReport', {
    extend: 'Ext.tab.Panel',
    alias: ['widget.IterationReport'],
    items: [
        {
            title: '需求',
            xtype: 'Report',
            listeners: {
                afterrender: function () {
                    var me = this;
                    me.load('report/query_iteration_report', {
                        'projectId': me.up().node.data.id,
                        'reportConfigurationType': '迭代度量-需求'
                    });
                }
            }
        },
        {
            title: '设计',
            xtype: 'Report',
            listeners: {
                afterrender: function () {
                    var me = this;
                    me.load('report/query_iteration_report', {
                        'projectId': me.up().node.data.id,
                        'reportConfigurationType': '迭代度量-设计'
                    });
                }
            }
        },
        {
            title: '开发',
            xtype: 'Report',
            listeners: {
                afterrender: function () {
                    var me = this;
                    me.load('report/query_iteration_report', {
                        'projectId': me.up().node.data.id,
                        'reportConfigurationType': '迭代度量-开发'
                    });
                }
            }
        },
        {
            title: '测试',
            xtype: 'Report',
            listeners: {
                afterrender: function () {
                    var me = this;
                    me.load('report/query_iteration_report', {
                        'projectId': me.up().node.data.id,
                        'reportConfigurationType': '迭代度量-测试'
                    });
                }
            }
        },
        {
            title: '构建',
            xtype: 'Report',
            listeners: {
                afterrender: function () {
                    var me = this;
                    me.load('report/query_iteration_report', {
                        'projectId': me.up().node.data.id,
                        'reportConfigurationType': '迭代度量-构建'
                    });
                }
            }
        },
        {
            title: '转测试',
            xtype: 'Report',
            listeners: {
                afterrender: function () {
                    var me = this;
                    me.load('report/query_iteration_report', {
                        'projectId': me.up().node.data.id,
                        'reportConfigurationType': '迭代度量-转测试'
                    });
                }
            }
        },
        {
            title: '迭代管理',
            xtype: 'Report',
            listeners: {
                afterrender: function () {
                    var me = this;
                    me.load('report/query_iteration_report', {
                        'projectId': me.up().node.data.id,
                        'reportConfigurationType': '迭代度量-迭代管理'
                    });
                }
            }
        },
        {
            title: '工程能力',
            xtype: 'Report',
            listeners: {
                afterrender: function () {
                    var me = this;
                    me.load('report/query_iteration_report', {
                        'projectId': me.up().node.data.id,
                        'reportConfigurationType': '迭代度量-工程能力'
                    });
                }
            }
        },
        {
            title: '验收',
            xtype: 'Report',
            listeners: {
                afterrender: function () {
                    var me = this;
                    me.load('report/query_iteration_report', {
                        'projectId': me.up().node.data.id,
                        'reportConfigurationType': '迭代度量-验收'
                    });
                }
            }
        },
        {
            title: '客户反馈',
            xtype: 'Report',
            listeners: {
                afterrender: function () {
                    var me = this;
                    me.load('report/query_iteration_report', {
                        'projectId': me.up().node.data.id,
                        'reportConfigurationType': '迭代度量-客户反馈'
                    });
                }
            }
        }]
})