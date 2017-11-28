Ext.define('App.project.field.SiteComboBox', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.SiteComboBox',
    editable: false,
    queryMode: 'local',
    valueField: 'value',
    displayField: 'name',
    store: Ext.create('Ext.data.Store', {
        fields: ['value', 'name'],
        data: [{
            value: 'onSite',
            name: "onSite"
        }, {
            value: 'offSite',
            name: "offSite"
        }]
    })
})