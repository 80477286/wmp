Ext.define('App.organization.model.OrganizationModel', {
    extend: 'Extend.data.BaseModel',
    fields: [{
        name: 'iconCls',
        convert: function (v, r) {
            var type = r.get('type');
            if (!Ext.isEmpty(type)) {
                return 'icon-' + type.toLocaleLowerCase();
            } else {
                return null;
            }
        }
    }, {
        name: 'leaf',
        convert: function (v, r) {
            var type = r.get('type');
            if (!Ext.isEmpty(type)) {
                if (type.toLocaleLowerCase() == 'pdu') {
                    return true;
                }
            }
            return false;
        }
    }],
    proxy: {
        type: 'ajax',
        url: 'organization/get_by_id',
        idParam: 'id'
    }
});
