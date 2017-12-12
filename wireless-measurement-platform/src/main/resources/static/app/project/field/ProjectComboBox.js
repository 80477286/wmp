Ext.define('App.project.field.ProjectComboBox', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.ProjectComboBox',
    displayField: 'name',
    valueField: 'id',
    editable: false,
    multiSelect: false,
    initComponent: function () {
        this.store = {
            fields: ['id', 'name', 'huaweiNumber', 'huaweiNumber'],
            pageSize: 999,
            proxy: {
                type: 'ajax',
                url: 'project/query',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            },
            autoLoad: true
        }
        if (!Ext.isEmpty(this.extraParams)) {
            this.store.proxy.extraParams = this.extraParams;
        }
        this.callParent(arguments);
    }

})