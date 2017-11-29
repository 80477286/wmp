Ext.define('App.metric.project.view.IterationReport', {
    extend: 'Ext.tab.Panel',
    requires: ['App.project.view.ProjectFormPanel'],
    alias: ['widget.IterationReport'],
    items: [
        {
            title: '项目信息',
            xtype: 'panel',
            layout: 'fit',
            listeners: {
                afterrender: function () {
                    var me = this;
                    me.down('ProjectFormPanel').load({
                        url: 'project/edit',
                        params:
                            {
                                id: me.up().node.data.id
                            },
                        success: function (form, result, data) {
                            me.down('ProjectFormPanel').down('[name=projectOrder.name]').setValue(result.result.data.parent.name);
                            me.down('ProjectFormPanel').down('[name=projectOrder.po]').setValue(result.result.data.parent.po);
                            var startDate = result.result.data.startDate;
                            var plannedEndDate = result.result.data.plannedEndDate;
                            if (startDate != null) {
                                me.down('ProjectFormPanel').down('[name=startDate]').setValue(startDate.substring(0, startDate.indexOf('T')));
                            }
                            if (plannedEndDate != null) {
                                me.down('ProjectFormPanel').down('[name=plannedEndDate]').setValue(plannedEndDate.substring(0, plannedEndDate.indexOf('T')));
                            }
                        }
                    });
                }
            },
            items: [{
                border: true,
                labelWidth: 110,
                columnWidth: 1,
                height: '100%',
                xtype: 'ProjectFormPanel'
            }]
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
                            'reportConfigurationType': '迭代度量-需求'
                        });
                    }
                }
        }
        ,
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
                            'reportConfigurationType': '迭代度量-设计'
                        });
                    }
                }
        }
        ,
        {
            title: '迭代开发',
            xtype:
                'Report',
            listeners:
                {
                    afterrender: function () {
                        var me = this;
                        me.load('report/query_iteration_report', {
                            'projectId': me.up().node.data.id,
                            'reportConfigurationType': '迭代度量-迭代开发'
                        });
                    }
                }
        }
        ,
        {
            title: '开发防护',
            xtype:
                'Report',
            listeners:
                {
                    afterrender: function () {
                        var me = this;
                        me.load('report/query_iteration_report', {
                            'projectId': me.up().node.data.id,
                            'reportConfigurationType': '迭代度量-开发防护'
                        });
                    }
                }
        }
        ,
        {
            title: '工程能力',
            xtype:
                'Report',
            listeners:
                {
                    afterrender: function () {
                        var me = this;
                        me.load('report/query_iteration_report', {
                            'projectId': me.up().node.data.id,
                            'reportConfigurationType': '迭代度量-工程能力'
                        });
                    }
                }
        }
        ,
        {
            title: '转测试',
            xtype:
                'Report',
            listeners:
                {
                    afterrender: function () {
                        var me = this;
                        me.load('report/query_iteration_report', {
                            'projectId': me.up().node.data.id,
                            'reportConfigurationType': '迭代度量-转测试'
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
                            'reportConfigurationType': '迭代度量-测试执行'
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
                            'reportConfigurationType': '迭代度量-自动化'
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
                            'reportConfigurationType': '迭代度量-构建'
                        });
                    }
                }
        }
        ,
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
                            'reportConfigurationType': '迭代度量-迭代管理'
                        });
                    }
                }
        }
        ,
        {
            title: '验收',
            xtype:
                'Report',
            listeners:
                {
                    afterrender: function () {
                        var me = this;
                        me.load('report/query_iteration_report', {
                            'projectId': me.up().node.data.id,
                            'reportConfigurationType': '迭代度量-验收'
                        });
                    }
                }
        }
        ,
        {
            title: '客户反馈',
            xtype:
                'Report',
            listeners:
                {
                    afterrender: function () {
                        var me = this;
                        me.load('report/query_iteration_report', {
                            'projectId': me.up().node.data.id,
                            'reportConfigurationType': '迭代度量-客户反馈'
                        });
                    }
                }
        }
    ]
})