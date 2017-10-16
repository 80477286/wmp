Ext.define('App.projectmetric.view.ProjectBreadCrumb', {
    extend: 'App.commons.view.BreadCrumb',
    alias: ['widget.projectbreadcrumb', 'widget.ProjectBreadCrumb'],
    updatePath: function (record) {
        if (!Ext.isEmpty(record)) {
            if (record.isModel && !record.isRoot()) {
                var me = this;
                var lis = this.body.el.query('li', false);
                if (lis.length > 0) {
                    Ext.Array.each(lis, function (item) {
                        item.destroy();
                    })
                }
                this.insertNodes(record)
            }
        }
    },
    insertNodes: function (record) {
        var me = this;
        if (!Ext.isEmpty(record) && !record.isRoot()) {
            var text = record.get('text');
            this.insertFirst(text, record);
            this.insertNodes(record.parentNode)
        }
    }
})