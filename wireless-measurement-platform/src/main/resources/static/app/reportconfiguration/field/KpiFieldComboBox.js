Ext.define('App.reportconfiguration.field.KpiFieldComboBox', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.KpiFieldComboBox',
    editable: false,
    queryMode: 'local',
    valueField: 'field',
    displayField: 'field',
    multiSelect:true,
    store: Ext.create('Ext.data.Store', {
        fields: ['field', 'field'],
        data: [{
            value: 'iteration',
            name: "iteration"
        }]
    })
})