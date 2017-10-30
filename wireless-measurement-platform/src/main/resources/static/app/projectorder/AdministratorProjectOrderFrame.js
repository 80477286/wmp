Ext.define('App.projectorder.AdministratorProjectOrderFrame', {
    extend: 'App.commons.tab.BaseFrame',
    alias: ['widget.AdministratorProjectOrderFrame'],
    requires: ['App.projectorder.view.ProjectOrderTreeGrid'],
    title: 'PO管理',
    tabitems: [{title: 'PO管理', xtype: 'ProjectOrderTreeGrid'}]
})