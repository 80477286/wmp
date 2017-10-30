Ext.define('App.projectorder.model.ProjectOrderModel', {
    extend: 'App.organization.model.OrganizationModel',
    fields: [{
        name: 'leaf',
        convert: function (v, r) {
            var type = r.get('type');
            if (!Ext.isEmpty(type)) {
                if (type.toLocaleLowerCase() == 'project') {
                    return true;
                }
            }
            return false;
        }
    }],
    proxy: {
        type: 'ajax',
        url: 'projectorder/get_simple_by_id',
        idParam: 'id',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});
