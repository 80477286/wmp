Ext.define('App.report.iteration.model.IterationReportViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.IterationReportViewModel',
    requires: ['App.report.model.ReportModel'],
    data: {
        columns: [{
            header: 'ID',
            dataIndex: 'id',
            hidden: true
        }, {
            header: '迭代',
            dataIndex: 'iteration',
            renderer: function (v, m, r) {
                var iteration = r.get('iteration');
                if (!Ext.isEmpty(iteration)) {
                    return iteration.name;
                }
                return '';
            }
        }, {
            header: '创建人',
            dataIndex: 'creator'
        }, {
            header: '创建时间',
            xtype: 'cdtcolumn',
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
            model: 'App.report.model.ReportModel',
            pageSize: 25,
            remoteSort: true,
            sorters: [{
                property: 'cdt',
                direction: 'ASC'
            }],
            proxy: {
                type: 'majax',
                url: '/report/query_simple',
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: 'total'
                }
            }
        }
    }
});