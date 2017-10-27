Ext.define('App.project.PoProjectFrame', {
    extend: 'App.commons.tab.BaseFrame',
    alias: ['widget.PoProjectFrame'],
    requires: ['App.project.view.ActivedProjectTree'],
    title: '报表模板配置',
    tabitems: [{title: '运行中的项目', xtype: 'ActivedProjectTree'}]
})