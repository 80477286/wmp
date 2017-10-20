Ext.define('App.reportconfiguration.kpiconfiguration.viewmodel.KpiConfigurationViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.kpi_configuration_viewmodel',
    requires: ['App.reportconfiguration.kpiconfiguration.model.KpiConfigurationModel'],
    data: {
        columns: [{
            header: 'ID',
            dataIndex: 'id',
            hidden: true
        }, {
            header: '名称',
            dataIndex: 'name'
        }, {
            header: '类型',
            dataIndex: 'type'
        }, {
            header: '创建者',
            dataIndex: 'creator'
        }, {
            header: '描述',
            dataIndex: 'description'
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
            model: 'App.reportconfiguration.kpiconfiguration.model.KpiConfigurationModel',
            pageSize: 5,
            remoteSort: true,
            sorters: [{
                property: 'cdt',
                direction: 'desc'
            }],
            proxy: {
                type: 'majax',
                url: '/report_configuration/query',
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: 'total'
                }
            }
        }
    }
});