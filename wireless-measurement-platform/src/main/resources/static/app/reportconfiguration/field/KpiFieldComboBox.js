Ext.define('App.reportconfiguration.field.KpiFieldComboBox', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.KpiFieldComboBox',
    editable: false,
    queryMode: 'local',
    valueField: 'name',
    displayField: 'name',
    multiSelect: true,
    store: Ext.create('Ext.data.Store', {
        fields: ['name', 'name'],
        data: [{
            value: '迭代',
            name: "迭代"
        }]
    })
})