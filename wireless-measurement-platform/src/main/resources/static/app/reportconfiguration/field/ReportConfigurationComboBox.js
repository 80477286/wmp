Ext.define('App.reportconfiguration.field.ReportConfigurationComboBox', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.ReportConfigurationComboBox',
    displayField: 'name',
    valueField: 'id',
    editable: false,
    multiSelect: false,
    queryStr: '',
    store: {
        fields: ['id', 'name'],
        pageSize: 999,
        proxy: {
            extraParams: {
                'params.type_like': '迭代度量-%',
                'params.projectId_isnull': ''
            },
            type: 'ajax',
            url: 'report_configuration/query_simple',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        },
        autoLoad: true
    }
})