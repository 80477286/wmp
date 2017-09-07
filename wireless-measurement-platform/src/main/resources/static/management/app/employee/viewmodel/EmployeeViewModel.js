Ext.define('App.employee.viewmodel.EmployeeViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.employee_viewmodel',
    requires: ['App.employee.model.EmployeeModel'],
    data: {
        columns: [{
            header: 'ID',
            dataIndex: 'id',
            hidden: true
        }, {
            header: '名称',
            dataIndex: 'name'
        }, {
            header: '中软编号',
            dataIndex: 'chinasoftNumber'
        }, {
            header: '华为编号',
            dataIndex: 'huaweiNumber'
        }, {
            header: '角色',
            dataIndex: 'role'
        }, {
            header: '状态',
            dataIndex: 'status'
        }, {
            xtype: 'CdtColumn',
            header: '创建时间',
            dataIndex: 'cdt',
            hidden: true
        }],
        search: {
            simpleSearch: true,
            advancedSearch: true,
            fields: [{
                "field": "name",
                "name": "名称",
                vtype: 's',
                opt: 'like'
            }, {
                "field": "chinasoftNumber",
                "name": "中软编号",
                vtype: 's',
                opt: 'like'
            }]
        }
    },
    stores: {
        Query: {
            autoLoad: false,
            model: 'App.employee.model.EmployeeModel',
            pageSize: 5,
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