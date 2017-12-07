Ext.define('App.hrm.employee.view.EmployeeManagementFrame', {
    extend: 'App.commons.tab.BaseFrame',
    alias: ['widget.EmployeeManagementFrame'],
    requires:['App.hrm.employee.view.EmployeeInfoCurdView'],
    title: '人力管理',
    tabitems: [{
        title: '人员管理',
        iconCls: 'fa-cog',
        xtype:'EmployeeInfoCurdView'
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