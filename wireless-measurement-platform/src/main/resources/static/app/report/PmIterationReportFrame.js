Ext.define('App.report.PmIterationReportFrame', {
    extend: 'App.commons.tab.BaseFrame',
    alias: ['widget.PmIterationReportFrame'],
    requires: ['App.report.iteration.view.IterationReportList'],
    title: '迭代报表管理',
    tabitems: [{
        title:'需求',
        xtype: 'IterationReportList',
        reportConfigurationType: '迭代度量-需求'
    }, {
        title:'设计',
        xtype: 'IterationReportList',
        reportConfigurationType: '迭代度量-设计'
    },{
        title:'开发',
        xtype: 'IterationReportList',
        reportConfigurationType: '迭代度量-开发'
    },  {
        title:'构建',
        xtype: 'IterationReportList',
        reportConfigurationType: '迭代度量-构建'
    }, {
        title:'转测试',
        xtype: 'IterationReportList',
        reportConfigurationType: '迭代度量-转测试'
    }, {
        title:'测试',
        xtype: 'IterationReportList',
        reportConfigurationType: '迭代度量-测试'
    }, {
        title:'迭代管理',
        xtype: 'IterationReportList',
        reportConfigurationType: '迭代度量-迭代管理'
    }, {
        title:'工程能力',
        xtype: 'IterationReportList',
        reportConfigurationType: '迭代度量-工程能力'
    }, {
        title:'验收',
        xtype: 'IterationReportList',
        reportConfigurationType: '迭代度量-验收'
    }]
})