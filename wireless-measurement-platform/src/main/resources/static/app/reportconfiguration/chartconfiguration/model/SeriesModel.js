Ext.define('App.reportconfiguration.chartconfiguration.model.SeriesModel', {
    extend: 'Extend.data.BaseModel',
    fields: [
        {name: 'type'},
        {name: 'xField'},
        {name: 'xFieldAlias'},
        {name: 'yFields'},
        {name: 'yFieldAliases'},
        {name: 'axis'}
    ]
});