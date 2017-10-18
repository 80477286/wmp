Ext.define('App.metric.project.view.ProjectMetricView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.ProjectMetricView',
    layout: 'border',
    requires: ['App.commons.view.NavbarTree', 'App.commons.view.Report', 'App.metric.project.controller.ProjectMetricController'],
    controller: 'ProjectMetricController',
    tbar: {
        xtype: 'breadcrumb',
        ui: 'navbar',
        height: 40, showIcons: true, showMenuIcons: true, overflowHandler: 'scroller',
        dock: 'top', displayField: 'name',
        listeners: {
            change: 'onBreadcrumbChange'
        }
    },
    items: [{
        xtype: 'NavbarTree',
        region: 'west',
        rootVisible: false,
        title: '组织/项目选择',
        width: 300,
        split: true,
        collapsed: true,
        collapsible: true,
        collapseMode: 'mini',
        header: false,
        listeners: {
            selectionchange: 'onNavbarSelectionchange',
            load: 'onNavbarTreeLoad'
        }
    },
        {
            region: 'center',
            xtype: 'tabpanel',
            items: [
                {
                    xtype: 'Report',
                    title: '项目进展报告',
                    listeners: {
                        afterrender: function () {
                            var me = this;
                            Ext.Ajax.request({
                                url: 'report/queryReport',
                                params: {
                                    'params.projectId': 1,
                                    'params.reportConfigurationId': 1,
                                    'params.groupName': '需求'
                                }, success: function (resp) {
                                    me.updateData([resp.result.data])
                                }
                            });
                        }
                    },
                }
                ,
                {
                    xtype: 'Report',
                    title: '需求'
                },
                {title: '设计'},
                {title: '开发'},
                {title: '测试'},
                {title: '构建'},
                {title: '转测试'},
                {title: '迭代管理'},
                {title: '工程能力'},
                {title: '验收'},
                {title: '客户反馈'}
            ]
        }
    ]
})