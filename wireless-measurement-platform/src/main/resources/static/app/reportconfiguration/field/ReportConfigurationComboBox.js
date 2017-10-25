Ext.define('App.reportconfiguration.field.ReportConfigurationComboBox', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.ReportConfigurationComboBox',
    displayField: 'name',
    valueField: 'id',
    editable: false,
    multiSelect: false,
    store: {
        fields: ['id', 'name'],
        pageSize: 999,
        proxy: {
            extraParams: {'params.type': '迭代度量'},
            type: 'ajax',
            url: 'report_configuration/query',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        },
        autoLoad: true
    }
})