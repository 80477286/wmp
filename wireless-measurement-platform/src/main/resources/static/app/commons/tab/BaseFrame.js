Ext.define('App.commons.tab.BaseFrame', {
    extend: 'Ext.panel.Panel',
    alias: ['widget.BaseFrame'],
    layout: 'border',
    requires: [],
    items: [{
        height: 66, region: 'north', bodyStyle: 'background-color:#333;'
    }],
    initComponent: function () {
        this.callParent(arguments);
        var tabpanel = {
            xtype: 'tabpanel',
            region: 'center',
            activeTab: 0
        };
        if (!Ext.isEmpty(this.tabitems)) {
            if (this.tabitems.length == 1) {
                tabpanel = this.tabitems[0];
                tabpanel.region = 'center';
                if (Ext.isEmpty(this.title)) {
                    this.title = tabpanel.title;
                }
                delete tabpanel.title;
            } else {
                tabpanel.items = this.tabitems;
            }
        }
        this.add(tabpanel);
    }
})