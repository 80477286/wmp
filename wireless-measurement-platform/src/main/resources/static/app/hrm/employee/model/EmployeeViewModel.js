Ext.define('App.hrm.employee.model.EmployeeViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.EmployeeViewModel',
    requires: ['App.hrm.employee.model.EmployeeModel'],
    data: {
        columns: [{
            header: 'ID',
            dataIndex: 'id',
            hidden: true
        }, {
            header: '姓名',
            dataIndex: 'name'
        }, {
            header: '中软工号',
            dataIndex: 'chinasoftNumber'
        }, {
            header: '华为工号',
            dataIndex: 'huaweiNumber'
        }, {
            header: '角色',
            dataIndex: 'role'
        }, {
            header: '状态',
            dataIndex: 'status'
        }, {
            header: '创建人',
            dataIndex: 'creator',
            hidden: true
        }, {
            xtype: 'cdtcolumn',
            header: '创建时间',
            dataIndex: 'cdt',
            hidden: true
        }],
        search: {
            simpleSearch: true,
            advancedSearch: true,
            fields: [{
                "field": "name",
                "name": "角色名",
                vtype: 's',
                opt: 'like'
            }, {
                "field": "description",
                "name": "描述",
                vtype: 's',
                opt: 'like'
            }]
        }
    },
    stores: {
        Query: {
            autoLoad: false,
            model: 'App.hrm.employee.model.EmployeeModel',
            pageSize: 25,
            remoteSort: true,
            sorters: [{
                property: 'cdt',
                direction: 'desc'
            }],
            proxy: {
                type: 'majax',
                url: '/hrm/employee/query',
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: 'total'
                }
            }
        }
    }
});