Ext.define('App.reportconfiguration.field.YAxisComboBox', {
    extend: 'Extend.form.field.CheckCombo',
    alias: 'widget.YAxisComboBox',
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