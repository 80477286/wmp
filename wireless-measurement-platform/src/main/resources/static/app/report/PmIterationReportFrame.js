Ext.define('App.report.PmIterationReportFrame', {
    extend: 'App.commons.tab.BaseFrame',
    alias: ['widget.PmIterationReportFrame'],
    requires: ['App.report.iteration.view.IterationReportList'],
    title: '迭代报表管理',
    tabitems: [{
        title: '迭代管理',
        xtype: 'IterationReportList',
        reportConfigurationType: '迭代度量-迭代管理'
    },{
        title: '需求',
        xtype: 'IterationReportList',
        reportConfigurationType: '迭代度量-需求'
    }, {
        title: '设计',
        xtype: 'IterationReportList',
        reportConfigurationType: '迭代度量-设计'
    }, {
        title: '开发',
        xtype: 'IterationReportList',
        reportConfigurationType: '迭代度量-开发'
    },  {
        title: '测试执行',
        xtype: 'IterationReportList',
        reportConfigurationType: '迭代度量-测试执行'
    }, {
        title: '自动化',
        xtype: 'IterationReportList',
        reportConfigurationType: '迭代度量-自动化'
    }, {
        title: '构建',
        xtype: 'IterationReportList',
        reportConfigurationType: '迭代度量-构建'
    }]
})