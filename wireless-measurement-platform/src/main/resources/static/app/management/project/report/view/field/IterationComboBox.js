Ext.define('App.management.project.report.view.field.IterationComboBox', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.IterationComboBox',
    displayField: 'name',
    valueField: 'id',
    editable: false,
    multiSelect: false,
    store: {
        fields: ['id', 'name'],
        pageSize: 999,
        proxy: {
            type: 'ajax',
            url: 'iteration/query_simple',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        },
        autoLoad: true
    }
})