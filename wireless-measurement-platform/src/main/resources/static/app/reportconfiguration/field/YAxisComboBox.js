Ext.define('App.reportconfiguration.field.YAxisComboBox', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.YAxisComboBox',
    editable: false,
    queryMode: 'local',
    valueField: 'fields',
    multiSelect: true,
    displayField: 'fields',
    store: Ext.create('Ext.data.Store', {
        fields: ['fields', 'fields'],
        data: [{
            value: 'iteration',
            name: "iteration"
        }]
    })
})