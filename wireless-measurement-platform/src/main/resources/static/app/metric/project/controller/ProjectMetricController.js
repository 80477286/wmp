Ext.define('App.metric.project.controller.ProjectMetricController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ProjectMetricController',
    control: {},
    onBreadcrumbChange: function ($this, node, prevNode, eOpts) {
        //面包屑路径发生变化时刷新导致树
        var nt = this.getView().down('NavbarTree');
        nt.suspendEvent('selectionchange');
        nt.setSelection(node);
        this.createReport(node);
        if (!node.isRoot()) {
            node.parentNode.expand();
        }
        nt.resumeEvent('selectionchange');
        if (!node.isRoot()) {
            Ext.util.Cookies.set('_navbar_tree_selected', node.data.id);
        }
    },
    onNavbarSelectionchange: function ($this, selected, eOpts) {
        var node = selected[0];
        //导航树选择节点时刷新面包屑路径
        var me = this.getView().down('NavbarTree');
        var bc = this.getView().getDockedItems('breadcrumb[dock="top"]')[0];
        bc.suspendEvent('change');
        bc.setSelection(node)
        bc.resumeEvent('change');

        if (!Ext.isEmpty(node)) {
            this.createReport(node);
            if (!node.isRoot()) {
                Ext.util.Cookies.set('_navbar_tree_selected', node.data.id);
            }
        }
    },
    loadLastSelected: function () {
        var me = this.getView().down('NavbarTree');
        //从缓存中读取最后一次加载的节点
        var nodeid = Ext.util.Cookies.get('_navbar_tree_selected');
        //初始选择节点
        var node = me.getRootNode().getChildAt(0);
        if (!Ext.isEmpty(nodeid) && Ext.isString(nodeid)) {
            node = me.getView().getStore().getNodeById(nodeid);
        }
        if (!Ext.isEmpty(node)) {
            me.setSelection(node);
        }
    },
    onNavbarTreeLoad: function () {
        var me = this.getView().down('NavbarTree');

        //绑定面包屑store
        var bc = me.up().getDockedItems('breadcrumb[dock="top"]')[0];
        bc.setStore(me.getStore());

        //加载最后一次选择的节点
        this.loadLastSelected();

        //处理左则树导航显示及隐藏效果
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
                me.expand();
            }
        });
    },
    createReport: function (node) {
        var view = this.getView();
        var report = null;
        if (!node.isRoot()) {
            if (node.data.type.toLowerCase() == 'project') {
                report = Ext.create('App.metric.project.view.IterationReport', {region: 'center', node: node});
            } else if (node.data.type.toLowerCase() == 'po') {
                report = Ext.create('App.metric.project.view.ProjectOrderReport', {region: 'center', node: node});

            } else if (node.data.type.toLowerCase() == 'pdu') {
                report = Ext.create('App.metric.project.view.PduReport', {region: 'center', node: node});

            } else if (node.data.type.toLowerCase() == 'du') {
                report = Ext.create('App.metric.project.view.DuReport', {region: 'center', node: node});

            } else if (node.data.type.toLowerCase() == 'bu') {
                report = Ext.create('App.metric.project.view.BuReport', {region: 'center', node: node});

            }
        }
        var oldReport = view.down('tabpanel[region="center"]');
        if (!Ext.isEmpty(oldReport)) {
            oldReport.destroy();
        }
        if (report != null) {
            view.add(report);
        }
    }
})