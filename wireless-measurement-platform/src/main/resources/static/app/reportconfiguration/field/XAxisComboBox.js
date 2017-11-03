Ext.define('App.reportconfiguration.field.XAxisComboBox', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.XAxisComboBox',
    editable: false,
    queryMode: 'local',
    valueField: 'fields',
    displayField: 'fields',
    store: Ext.create('Ext.data.Store', {
        fields: ['fields', 'fields'],
        data: [{
            value: 'iteration',
            name: "iteration"
        }]
    })
})