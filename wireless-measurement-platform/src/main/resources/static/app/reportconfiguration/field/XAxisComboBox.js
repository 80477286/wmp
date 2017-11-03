Ext.define('App.reportconfiguration.field.XAxisComboBox', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.XAxisComboBox',
    editable: false,
    queryMode: 'local',
    valueField: 'fieldAliases',
    displayField: 'fieldAliases',
    store: Ext.create('Ext.data.Store', {
        fields: ['fieldAliases', 'fieldAliases'],
        data: [{
            value: '迭代',
            name: "迭代"
        }]
    })
})