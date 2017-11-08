Ext.define('App.reportconfiguration.model.ReportConfigurationModel', {
    extend: 'Extend.data.BaseModel',
    fields: [{
        name: 'public',
        convert: function (v, r) {
            if (!Ext.isEmpty(r.get('projectId'))) {
                return '否';
            } else {
                return '是';
            }
        }
    }]
})