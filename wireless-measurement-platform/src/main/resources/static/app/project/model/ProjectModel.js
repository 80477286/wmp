Ext.define('App.project.model.ProjectModel', {
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
    }, {
        name: 'projectOrder',
        convert: function (v, r) {
            var val = r.get('parent');
            return val;
        }
    }, {
        name : 'startDate',
        type : 'date'
    }, {
        name : 'plannedEndDate',
        type : 'date'
    }, {
        name : 'actualEndDate',
        type : 'date'
    }],
    proxy: {
        type: 'ajax',
        url: 'project/get_simple_by_id',
        idParam: 'id',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});
