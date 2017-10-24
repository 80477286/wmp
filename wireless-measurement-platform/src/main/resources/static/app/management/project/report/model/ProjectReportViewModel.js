Ext.define('App.management.project.report.model.ProjectReportViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.ProjectReportViewModel',
    requires: ['App.management.project.report.model.ReportModel'],
    data: {
        columns: [{
            header: 'ID',
            dataIndex: 'id',
            hidden: true
        }, {
            header: '度量类型',
            dataIndex: 'reportConfigurationType'
        }, {
            header: '创建人',
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
                "name": "度量类型",
                "field": "reportConfigurationType",
                vtype: 's',
                opt: '=',
                datas: [['迭代度量', '迭代度量'], ['项目度量', '项目度量']]
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
            model: 'App.management.project.report.model.ReportModel',
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