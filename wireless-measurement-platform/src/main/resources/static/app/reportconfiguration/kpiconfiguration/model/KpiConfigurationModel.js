Ext.define('App.reportconfiguration.kpiconfiguration.model.KpiConfigurationModel', {
    extend: 'Extend.data.BaseModel',
    fields: [
        {
            name: 'name'
        },
        {
            name: 'dataType'
        },
        {
            name: 'field'
        },
        {
            name: 'expression'
        },
        {
            name: 'format'
        },
        {
            name: 'formatter'
        },
        {
            name: 'description'
        }
    ]
});