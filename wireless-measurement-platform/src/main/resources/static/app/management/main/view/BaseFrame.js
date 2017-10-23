Ext.define('App.management.main.view.BaseFrame', {
    extend: 'Ext.panel.Panel',
    alias: ['widget.BaseFrame'],
    layout: 'border',
    requires: [],
    items: [{
        height: 66, region: 'north', bodyStyle: 'background-color:#333;'
    }, {
        xtype: 'tabpanel', region: 'center'
    }],
    initComponent: function () {
        this.callParent(arguments);
        this.down('tabpanel').add(this.tabitems);
    }
})