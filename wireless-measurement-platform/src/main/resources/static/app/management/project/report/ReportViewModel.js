Ext.define('App.management.project.report.ReportViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.ReportViewModel',
    requires: ['App.management.project.report.ReportModel'],
    data: {
        columns: [{
            header: 'ID',
            dataIndex: 'id',
            hidden: true
        }, {
            header: '度量类型',
            dataIndex: 'reportConfigurationType'
        }, {
            header: '迭代',
            dataIndex: 'iterationId'
        }, {
            header: '分组',
            dataIndex: 'groupName'
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
                "name": "度量类型",
                "field": "reportConfigurationType",
                vtype: 's',
                opt: '=',
                datas: [['迭代度量','迭代度量'], ['项目度量','项目度量']]
            }, {
                "field": "url",
                "name": "URL",
                vtype: 's',
                opt: 'like'
            }]
        }
    },
    stores: {
        Query: {
            autoLoad: false,
            model: 'App.management.project.report.ReportModel',
            pageSize: 25,
            remoteSort: true,
            sorters: [{
                property: 'cdt',
                direction: 'desc'
            }],
            proxy: {
                type: 'majax',
                url: '/report/query',
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: 'total'
                }
            }
        }
    }
});