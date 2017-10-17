Ext.define('App.commons.view.NavbarTree', {
    extend: 'Ext.tree.Panel',
    alias: ['widget.NavbarTree'],
    bodyStyle: 'padding:0 5px 5px 0;',
    style: {backgroundColor: '#000'},
    store: {
        xtype: 'treestore',
        root: {
            expanded: true,
            rootVisible: false,
            iconCls: 'icon-page-last',
            text: ''
        }
    },
    listeners: {
        afterrender: function () {
            var me = this;
            Ext.Ajax.request({
                url: 'organization/query',
                params: {'params.parent.id_isnull': ''},
                success: function (resp, opts) {
                    var root = {
                        expanded: true,
                        rootVisible: false,
                        iconCls: 'icon-page-last',
                        text: '',
                        children: resp.result.data
                    }
                    me.getStore().setRoot(root);
                }
            });
        }
    }
})