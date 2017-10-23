Ext.define('App.management.basicdata.view.BasicDataFrame', {
    extend: 'App.management.main.view.BaseFrame',
    alias: ['widget.BasicDataFrame'],
    title: '基础数据',
    requires: [],
    tabitems: [{
        title: '版本列表',
        iconCls: 'fa-cog'
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        html: '{loremIpsum}'
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        html: '{loremIpsum}'
    }]
})