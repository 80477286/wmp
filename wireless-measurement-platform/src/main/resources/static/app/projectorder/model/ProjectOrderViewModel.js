Ext.define('App.projectorder.model.ProjectOrderViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.ProjectOrderViewModel',
    requires: ['App.projectorder.model.ProjectOrderModel'],
    data: {
        columns: [{
            header: 'ID',
            dataIndex: 'id',
            hidden: true
        }, {
            header: 'PO名称',
            dataIndex: 'name'
        }, {
            header: 'PO号',
            dataIndex: 'po'
        }, {
            header: '内部PO号',
            dataIndex: 'innerPo'
        }, {
            header: '合同类型',
            dataIndex: 'contractType'
        }, {
            header: '交付部',
            dataIndex: 'deliveryDepartment'
        }, {
            header: '项目类型',
            dataIndex: 'projectType'
        }, {
            header: '在案',
            dataIndex: 'onSite'
        }, {
            header: '华为PDU外包代表',
            dataIndex: 'huaweiPduOutsourcingRepresentatives'
        }, {
            header: '合同工作量',
            dataIndex: 'contractWorkload'
        }, {
            header: '合同金额',
            dataIndex: 'contractAmount'
        }, {
            header: '交付部经理',
            dataIndex: 'deliveryManager'
        }, {
            xtype: 'ymdcolumn',
            header: '立项时间',
            dataIndex: 'startTime'
        }, {
            xtype: 'ymdcolumn',
            header: '项目结项时间',
            dataIndex: 'endTime'
        }, {
            xtype: 'ymdcolumn',
            header: '计划开始时间',
            dataIndex: 'planStartTime'
        },{
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
                name: "PO名称",
                field: "name",
                vtype: 's',
                opt: 'like'
            }]
        }
    },
    stores: {
        Query: {
            autoLoad: false,
            model: 'App.projectorder.model.ProjectOrderModel',
            pageSize: 25,
            remoteSort: true,
            sorters: [{
                property: 'cdt',
                direction: 'desc'
            }],
            proxy: {
                type: 'majax',
                url: '/projectorder/query',
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: 'total'
                }
            }
        }
    }
});