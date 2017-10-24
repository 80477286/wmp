Ext.define("App.management.project.report.view.ReportEditor", {
    extend: 'Extend.window.FormWindow',
    alias: 'widget.report_editor',
    config: {
        entity: 'report',
        defaults: {
            columnWidth: 1
        },
        window: {
            title: '修改资源信息',
            width: 800,
            height: 500,
            resizable: false
        }
    },
    items: [{
        xtype: 'hidden',
        name: 'id'
    }, {
        xtype: 'textfield',
        name: 'reportConfigurationType',
        fieldLabel: '度量类型',
        readOnly: true,
        submitValues: false
    }, {
        xtype: 'textfield',
        name: 'iterationId',
        fieldLabel: '迭代',
        readOnly: true,
        submitValues: false
    }, {
        xtype: 'textfield',
        name: 'groupName',
        fieldLabel: '分组',
        readOnly: true,
        submitValues: false
    }, {
        name: 'kpis',
        xtype: 'gridfield',
        fieldLabel: '角色配置',
        columnWidth: 1,
        height: 300,
        submitFields: ['id', 'name'],
        roweditable: true,
        tbar: {add: {hidden: true}, remove: {hidden: true}},border:false,
        columns: [{
            header: '指标名称',
            dataIndex: 'name'
        }, {
            header: '字段名',
            dataIndex: 'field'
        }, {
            header: '值',
            dataIndex: 'value', editor: {xtype: 'textfield'}
        }]
    }]
})
