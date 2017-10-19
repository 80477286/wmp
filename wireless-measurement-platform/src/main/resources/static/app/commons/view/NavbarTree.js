Ext.define('App.commons.view.NavbarTree', {
    extend: 'Ext.tree.Panel',
    alias: ['widget.NavbarTree'],
    bodyStyle: 'padding:0 5px 5px 0;',
    style: {backgroundColor: '#000'},
    displayField: 'name',
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
                    var data = resp.result.data;
                    me.initData(data);
                    var root = {
                        expanded: true,
                        rootVisible: false,
                        iconCls: 'icon-page-last',
                        text: '',
                        children: data
                    }
                    me.getStore().setRoot(root);
                    me.fireEvent('load')
                }
            });
        }
    },
    initData: function (datas) {
        if (!Ext.isEmpty(datas)) {
            for (var i = 0; i < datas.length; i++) {
                var data = datas[i];
                data.iconCls = 'icon-' + data.type.toLowerCase();
                if (data.type == 'project') {
                    data.leaf = true;
                }else{
                    data.expanded=true;
                }
                this.initData(data.children)
            }
        }
    }
})