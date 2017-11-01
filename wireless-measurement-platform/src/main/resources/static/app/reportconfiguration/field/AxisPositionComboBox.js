Ext.define('App.reportconfiguration.field.AxisPositionComboBox', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.AxisPositionComboBox',
    editable: false,
    queryMode: 'local',
    valueField: 'value',
    displayField: 'name',
    store: Ext.create('Ext.data.Store', {
        fields: ['value', 'name'],
        data: [{
            value: 'bottom',
            name: "bottom"
        }, {
            value: 'left',
            name: "left"
        }, {
            value: 'right',
            name: "right"
        }]
    })
})