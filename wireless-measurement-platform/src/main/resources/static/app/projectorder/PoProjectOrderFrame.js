Ext.define('App.projectorder.PoProjectOrderFrame', {
    extend: 'App.commons.tab.BaseFrame',
    alias: ['widget.PoProjectOrderFrame'],
    requires: ['App.projectorder.view.ProjectOrderTreeGrid'],
    tabitems: [{title: 'PO管理', xtype: 'ProjectOrderTreeGrid'}]
})