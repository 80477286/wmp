Ext.define('App.organization.model.OrganizationModel', {
    extend: 'Extend.data.BaseModel',
    fields: [],
    proxy: {
        type: 'ajax',
        url: 'organization/get_by_id',
        idParam: 'id'
    }
});
