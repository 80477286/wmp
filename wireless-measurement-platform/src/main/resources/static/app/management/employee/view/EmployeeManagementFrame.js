Ext.define('App.management.employee.view.EmployeeManagementFrame', {
    extend: 'App.management.main.view.BaseFrame',
    alias: ['widget.EmployeeManagementFrame'],
    title: '人力管理',
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