Ext.define('App.project.model.ProjectViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.ProjectViewModel',
    requires: ['App.project.model.ProjectModel'],
    data: {
        columns: [{
            header: 'ID',
            dataIndex: 'id',
            hidden: true
        }, {
            header: '姓名',
            dataIndex: 'name'
        }, {
            xtype: 'ymdcolumn',
            header: '开始时间',
            dataIndex: 'startDate'
        }, {
            xtype: 'ymdcolumn',
            header: '计划结项时间',
            dataIndex: 'plannedEndDate'
        }, {
            xtype: 'ymdcolumn',
            header: '实际结项时间',
            dataIndex: 'actualEndDate'
        }, {
            header: '项目经理',
            dataIndex: 'projectManager'
        }, {
            header: '项目编号',
            dataIndex: 'projectCode'
        }, {
            header: '项目类型',
            dataIndex: 'projectType'
        }, {
            header: '状态',
            dataIndex: 'implementationStatus'
        }, {
            header: '业务类型',
            dataIndex: 'businessCategory'
        }, {
            header: '业务子类',
            dataIndex: 'businessSubclasses'
        }, {
            header: '线网项目',
            dataIndex: 'isInternetProject'
        }, {
            header: 'QA',
            dataIndex: 'qa'
        }, {
            header: '项目工作量',
            dataIndex: 'projectWorkload'
        }, {
            header: '付费类型',
            dataIndex: 'billingType'
        }, {
            header: '描述',
            dataIndex: 'description'
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
            model: 'App.project.model.ProjectModel',
            pageSize: 25,
            remoteSort: true,
            sorters: [{
                property: 'cdt',
                direction: 'desc'
            }],
            proxy: {
                type: 'majax',
                url: '/project/query',
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: 'total'
                }
            }
        }
    }
});