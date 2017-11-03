Ext.define('App.reportconfiguration.field.SeriesTypeComboBox', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.SeriesTypeComboBox',
    editable: false,
    queryMode: 'local',
    valueField: 'value',
    displayField: 'name',
    store: Ext.create('Ext.data.Store', {
        fields: ['value', 'name'],
        data: [{
            value: 'bar',
            name: "bar"
        }, {
            value: 'line',
            name: "line"
        }]
    })
})