Ext.define('App.reportconfiguration.chartconfiguration.viewmodel.ChartConfigurationViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.chart_configuration_viewmodel',
    requires: ['App.reportconfiguration.chartconfiguration.model.ChartConfigurationModel'],
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