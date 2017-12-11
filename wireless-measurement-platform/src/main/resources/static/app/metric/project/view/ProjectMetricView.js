Ext.define('App.metric.project.view.ProjectMetricView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.ProjectMetricView',
    layout: 'border',
    requires: ['App.commons.view.NavbarTree',
        'App.commons.view.Report',
        'App.metric.project.controller.ProjectMetricController'],
    controller: 'ProjectMetricController',
    tbar: {
        xtype: 'breadcrumb',
        ui: 'navbar',
        height: 40,
        showIcons: true,
        showMenuIcons: true,
        overflowHandler: 'scroller',
        dock: 'top',
        displayField: 'name',
        listeners: {
            change: 'onBreadcrumbChange'
        }
    },
    items: [
        {
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
        }
    ]
})