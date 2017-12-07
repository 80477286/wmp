Ext.define('App.reportconfiguration.model.ReportConfigurationViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.ReportConfigurationViewModel',
    requires: ['App.reportconfiguration.model.ReportConfigurationModel'],
    data: {
        columns: [{
            header: '名称',
            dataIndex: 'name'
        }, {
            header: '类型',
            dataIndex: 'type'
        }, {
            header: '描述',
            dataIndex: 'description'
        }, {
            header: '创建者',
            dataIndex: 'creator'
        }, {
            xtype: 'cdtcolumn',
            header: '创建时间',
            dataIndex: 'cdt'
        }],
        projectColumns: [{
            header: '名称',
            dataIndex: 'name'
        }, {
            header: '类型',
            dataIndex: 'type'
        }, {
            header: '描述',
            dataIndex: 'description'
        }, {
            header: '公共模板',
            dataIndex: 'public',
            sortable: false
        }, {
            header: '创建者',
            dataIndex: 'creator'
        }, {
            xtype: 'cdtcolumn',
            header: '创建时间',
            dataIndex: 'cdt'
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
                "field": "type",
                "name": "类型",
                vtype: 's',
                opt: 'like'
            }]
        }
    },
    stores: {
        Query: {
            autoLoad: false,
            model: 'App.reportconfiguration.model.ReportConfigurationModel',
            pageSize: 20,
            remoteSort: true,
            sorters: [{
                property: 'cdt',
                direction: 'desc'
            }],
            proxy: {
                type: 'majax',
                url: '/report_configuration/query_simple',
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: 'total'
                }
            }
        },
        QueryByProject: {
            autoLoad: false,
            model: 'App.reportconfiguration.model.ReportConfigurationModel',
            pageSize: 999,
            remoteSort: true,
            sorters: [{
                property: 'cdt',
                direction: 'asc'
            }],
            proxy: {
                type: 'majax',
                url: '/report_configuration/query_simple_by_project',
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: 'total'
                }
            }
        }
    }
});