Ext.define('App.iteration.viewmodel.IterationViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.IterationViewModel',
    requires: ['App.iteration.model.IterationModel'],
    data: {
        columns: [{
            header: 'ID',
            dataIndex: 'id',
            hidden: true
        }, {
            header: '迭代名称',
            dataIndex: 'name'
        }, {
            header: '迭代计划开始日期',
            dataIndex: 'planedStartDate',
            xtype: 'datecolumn',
            format: 'Y-m-d'
        }, {
            header: '迭代计划结束日期',
            dataIndex: 'planedEndDate',
            xtype: 'datecolumn',
            format: 'Y-m-d'
        }, {
            header: '迭代实际开始日期',
            dataIndex: 'actuaStartDate',
            xtype: 'datecolumn',
            format: 'Y-m-d'
        }, {
            header: '迭代实际结束日期',
            dataIndex: 'actualEndDate',
            xtype: 'datecolumn',
            format: 'Y-m-d'
        }, {
            header: '所属项目',
            dataIndex: 'project',
            renderer: function (data) {
                return data.name;
            }
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
                "name": "迭代名称",
                vtype: 's',
                opt: 'like'
            }]
        }
    },
    stores: {
        Query: {
            autoLoad: false,
            model: 'App.iteration.model.IterationModel',
            pageSize: 25,
            remoteSort: true,
            sorters: [{
                property: 'cdt',
                direction: 'desc'
            }],
            proxy: {
                type: 'majax',
                url: 'iteration/query',
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: 'total'
                }
            }
        }
    }
});