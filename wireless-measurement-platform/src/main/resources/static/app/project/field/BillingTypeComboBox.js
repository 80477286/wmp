Ext.define('App.project.field.BillingTypeComboBox', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.BillingTypeComboBox',
    editable: false,
    queryMode: 'local',
    valueField: 'value',
    displayField: 'name',
    store: Ext.create('Ext.data.Store', {
        fields: ['value', 'name'],
        data: [{
            value: 'TM',
            name: "TM"
        }, {
            value: 'FP',
            name: "FP"
        }]
    })
})