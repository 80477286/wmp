Ext.define('App.organization.AdministratorOrganizationFrame', {
    extend: 'App.commons.tab.BaseFrame',
    alias: ['widget.AdministratorOrganizationFrame'],
    requires: ['App.organization.view.OrganizationTreeGrid'],
    title: '组织配置',
    tabitems: [{title: '组织配置', xtype: 'OrganizationTreeGrid'}]
})