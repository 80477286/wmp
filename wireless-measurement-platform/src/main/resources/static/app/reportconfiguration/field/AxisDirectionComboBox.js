Ext.define('App.reportconfiguration.field.AxisDirectionComboBox', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.AxisDirectionComboBox',
    editable: false,
    queryMode: 'local',
    valueField: 'value',
    displayField: 'name',
    store: Ext.create('Ext.data.Store', {
        fields: ['value', 'name'],
        data: [{
            value: 'left',
            name: "left"
        }, {
            value: 'right',
            name: "right"
        }]
    })
})