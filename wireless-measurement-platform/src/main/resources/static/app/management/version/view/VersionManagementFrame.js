Ext.define('App.management.version.view.VersionManagementFrame', {
    extend: 'App.management.main.view.BaseFrame',
    alias: ['widget.VersionManagementFrame'],
    title: '版本管理',
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