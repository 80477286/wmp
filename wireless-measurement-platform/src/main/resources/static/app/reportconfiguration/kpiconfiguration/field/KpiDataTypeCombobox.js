Ext.define('App.reportconfiguration.kpiconfiguration.field.KpiDataTypeCombobox', {
    extend: 'Ext.form.field.ComboBox',
    alias: ['widget.KpiDataTypeCombobox',
        'widget.kpidatatypecombobox'],
    editable: false,
    queryMode: 'local',
    valueField: 'value',
    displayField: 'name',
    store: Ext.create('Ext.data.Store', {
        fields: ['value', 'name'],
        data: [{
            value: 'string',
            name: "string"
        }, {
            value: 'float',
            name: "float"
        }, {
            value: 'date',
            name: "date"
        }, {
            value: 'int',
            name: "int"
        }]
    })
});