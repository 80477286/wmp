Ext.define('App.metric.project.view.IterationReport', {
    extend: 'Ext.tab.Panel',
    requires: ['App.project.view.ProjectFormPanel'],
    alias: ['widget.IterationReport'],
    items: [
        {
            xtype: 'ProjectFormPanel',
            title: '项目信息'
        },
        {
            title: '迭代管理',
            xtype:
                'Report',
            listeners:
                {
                    afterrender: function () {
                        var me = this;
                        me.load('report/query_iteration_report', {
                            'projectId': me.up().node.data.id,
                            'reportConfigurationType': '迭代度量-迭代管理',
                            'pageable.sort': '[{"property":"cdt","direction":"ASC"}]'
                        });
                    }
                }
        },
        {
            title: '需求',
            xtype:
                'Report',
            listeners:
                {
                    afterrender: function () {
                        var me = this;
                        me.load('report/query_iteration_report', {
                            'projectId': me.up().node.data.id,
                            'reportConfigurationType': '迭代度量-需求',
                            'pageable.sort': '[{"property":"cdt","direction":"ASC"}]'
                        });
                    }
                }
        },
        {
            title: '设计',
            xtype:
                'Report',
            listeners:
                {
                    afterrender: function () {
                        var me = this;
                        me.load('report/query_iteration_report', {
                            'projectId': me.up().node.data.id,
                            'reportConfigurationType': '迭代度量-设计',
                            'pageable.sort': '[{"property":"cdt","direction":"ASC"}]'
                        });
                    }
                }
        }
        ,
        {
            title: '开发',
            xtype:
                'Report',
            listeners:
                {
                    afterrender: function () {
                        var me = this;
                        me.load('report/query_iteration_report', {
                            'projectId': me.up().node.data.id,
                            'reportConfigurationType': '迭代度量-开发',
                            'pageable.sort': '[{"property":"cdt","direction":"ASC"}]'
                        });
                    }
                }
        }
        ,
        {
            title: '测试执行',
            xtype:
                'Report',
            listeners:
                {
                    afterrender: function () {
                        var me = this;
                        me.load('report/query_iteration_report', {
                            'projectId': me.up().node.data.id,
                            'reportConfigurationType': '迭代度量-测试执行',
                            'pageable.sort': '[{"property":"cdt","direction":"ASC"}]'
                        });
                    }
                }
        }
        ,
        {
            title: '自动化',
            xtype:
                'Report',
            listeners:
                {
                    afterrender: function () {
                        var me = this;
                        me.load('report/query_iteration_report', {
                            'projectId': me.up().node.data.id,
                            'reportConfigurationType': '迭代度量-自动化',
                            'pageable.sort': '[{"property":"cdt","direction":"ASC"}]'
                        });
                    }
                }
        }
        ,
        {
            title: '构建',
            xtype:
                'Report',
            listeners:
                {
                    afterrender: function () {
                        var me = this;
                        me.load('report/query_iteration_report', {
                            'projectId': me.up().node.data.id,
                            'reportConfigurationType': '迭代度量-构建',
                            'pageable.sort': '[{"property":"cdt","direction":"ASC"}]'
                        });
                    }
                }
        }, {
            title: '验收',
            xtype:
                'Report',
            listeners:
                {
                    afterrender: function () {
                        var me = this;
                        me.load('report/query_iteration_report', {
                            'projectId': me.up().node.data.id,
                            'reportConfigurationType': '迭代度量-验收',
                            'pageable.sort': '[{"property":"cdt","direction":"ASC"}]'
                        });
                    }
                }
        }
    ]
})