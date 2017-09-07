Ext.define('App.version.viewmodel.VersionViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.VersionViewModel',
    requires: ['App.version.model.VersionModel'],
    data: {
        columns: [{
            header: 'ID',
            dataIndex: 'id',
            hidden: true
        }, {
            header: '版本名称',
            dataIndex: 'name'
        }, {
            header: '平台',
            dataIndex: 'platform',
            renderer: function (v, m, r) {
                if (!Ext.isEmpty(r.get('platform'))) {
                    return r.get('platform').name
                } else {
                    return '';
                }
            }
        }, {
            header: '版本项目编码',
            dataIndex: 'projectCode'
        }, {
            header: '华为PO',
            dataIndex: 'huaweiPo'
        }, {
            header: '合作方PO',
            dataIndex: 'chinasoftPo'
        }, {
            header: '合作方版本经理',
            dataIndex: 'versionManager'
        }, {
            header: '总工作量',
            dataIndex: 'totalWorkloads'
        }, {
            xtype: 'YmdColumn',
            text: '开始时间',
            dataIndex: 'startDate'
        }, {
            xtype: 'YmdColumn',
            text: '计划结束时间',
            dataIndex: 'plannedEndDate'
        }, {
            text: '项目状态',
            dataIndex: 'status',
            renderer: function (v) {
                if (v == 0) {
                    return '关闭';
                } else if (v == 1) {
                    return '执行';
                }
            }
        }, {
            header: 'TMSS版本映射',
            dataIndex: 'tmssVersionMapping'
        }, {
            header: 'DTS版本映射',
            dataIndex: 'dtsVersionMapping'
        }, {
            header: '业务版本映射',
            dataIndex: 'bizVersionMapping'
        }, {
            header: '描述',
            dataIndex: 'description'
        }],
        search: {
            fields: [{
                "name": "名称",
                "field": "name",
                vtype: 's',
                opt: 'like'
            }, {
                "name": "华为PO",
                "field": "huaweiPo",
                vtype: 's',
                opt: 'like'
            }, {
                "name": "项目编码",
                "field": "projectCode",
                vtype: 's',
                opt: 'like'
            }, {
                "name": "合作方PO",
                "field": "chinasoftPo",
                vtype: 's',
                opt: 'like'
            }, {
                "name": "版本经理",
                "field": "versionManager",
                vtype: 's',
                opt: 'like'
            }, {
                "name": "描述",
                "field": "description",
                vtype: 'tx',
                opt: 'like'
            }]
        }
    },
    stores: {
        Query: {
            sorters: [{
                property: 'cdt',
                direction: 'desc'
            }],
            autoLoad: false,
            model: 'App.version.model.VersionModel',
            pageSize: 25,
            remoteSort: true,
            proxy: {
                type: 'majax',
                url: '/vm/version/query',
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: 'total'
                }
            }
        }
    }
});