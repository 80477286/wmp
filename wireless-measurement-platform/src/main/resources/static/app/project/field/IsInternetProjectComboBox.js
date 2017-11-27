Ext.define('App.project.field.IsInternetProjectComboBox', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.IsInternetProjectComboBox',
    editable: false,
    queryMode: 'local',
    valueField: 'value',
    displayField: 'name',
    store: Ext.create('Ext.data.Store', {
        fields: ['value', 'name'],
        data: [{
            value: '是',
            name: "是"
        }, {
            value: '否',
            name: "否"
        }]
    })
})