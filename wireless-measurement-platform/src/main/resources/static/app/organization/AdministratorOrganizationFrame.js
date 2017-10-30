Ext.define('App.organization.AdministratorOrganizationFrame', {
    extend: 'App.commons.tab.BaseFrame',
    alias: ['widget.AdministratorOrganizationFrame'],
    requires: ['App.organization.view.OrganizationTreeGrid'],
    tabitems: [{title: '组织管理', xtype: 'OrganizationTreeGrid'}]
})