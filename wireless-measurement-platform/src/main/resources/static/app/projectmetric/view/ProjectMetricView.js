Ext.define('App.projectmetric.view.ProjectMetricView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.ProjectMetricView',
    layout: 'border', requires: ['App.commons.view.NavbarTree'],
    items: [{
        xtype: 'NavbarTree',
        region: 'west',
        rootVisible: false,
        width: 300,
        split: true,
        collapsed: true,
        collapsible: true,
        collapseMode: 'mini',
        header: false,
        listeners: {
            select: function ($this, record, index, eOpts) {
                this.up().bc.setSelection(record)
            },
            afterrender: function () {
                var me = this;
                var bc = Ext.create('Ext.toolbar.Breadcrumb', {
                    store: this.getStore(),
                    ui: 'navbar',
                    height: 40, showIcons: true, showMenuIcons: true,overflowHandler:'scroller',
                    dock: 'top',
                    listeners: {
                        change: function ($this, node, prevNode, eOpts) {
                            me.suspendEvent('select');
                            me.setSelection(node);
                            me.resumeEvent('select');
                        }
                    }
                })
                this.up().addDocked(bc)

                this.up().bc = bc;

                var firstNode = this.getRootNode().getChildAt(0);
                bc.setSelection(firstNode);
                me.collapseTask = new Ext.util.DelayedTask(function () {
                    me.collapse('left', 100);
                });
                var bodyEl = me.getEl();
                var splitter = bodyEl.next();
                bodyEl.on({
                    mouseleave: function () {
                        me.collapseTask.delay(1000);
                    },
                    mouseenter: function () {
                        me.collapseTask.cancel();
                    }
                });
                splitter.on({
                    mouseenter: function () {
                        me.expand(300);
                    }
                });
            }
        }
    },
        {
            region: 'center',
            xtype: 'tabpanel',
            items: [
                Ext.create('App.commons.view.Report', {
                    title: '项目进展报告'
                })
                ,
                {
                    title: '需求',
                    layout: 'border',
                    items: []
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