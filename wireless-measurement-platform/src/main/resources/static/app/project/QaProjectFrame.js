Ext.define('App.project.QaProjectFrame', {
    extend: 'App.commons.tab.BaseFrame',
    alias: ['widget.QaProjectFrame'],
    requires:  ['App.project.view.ProjectTreeGrid'],
    tabitems: [{title: '项目管理', xtype: 'ProjectTreeGrid'}]
})