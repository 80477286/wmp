Ext.define('App.reportconfiguration.field.AxisTypeComboBox', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.AxisTypeComboBox',
    editable: false,
    queryMode: 'local',
    valueField: 'value',
    displayField: 'name',
    store: Ext.create('Ext.data.Store', {
        fields: ['value', 'name'],
        data: [{
            value: 'category',
            name: "category"
        }, {
            value: 'numeric',
            name: "numeric"
        }]
    })
})