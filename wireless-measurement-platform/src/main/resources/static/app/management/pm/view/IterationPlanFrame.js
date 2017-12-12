Ext.define('App.management.pm.view.IterationPlanFrame', {
    extend: 'App.management.pm.view.PmBaseFrame',
    alias: ['widget.IterationPlanFrame'],
    requires: ['App.iteration.view.IterationList'],
    title: '迭代计划管理',
    tabitems: [{
        xtype: 'IterationList'
    }]
})