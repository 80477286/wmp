Ext.define("App.management.project.report.view.IterationReportEditor", {
    extend: 'Extend.window.FormWindow',
    alias: 'widget.report_editor',
    requires: ['App.management.project.report.model.KpiModel'],
    config: {
        entity: 'entity',
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
        xtype: 'textfield',
        name: 'reportConfigurationType',
        fieldLabel: '度量类型',
        readOnly: true,
        submitValues: false
    }, {
        name: 'kpis',
        xtype: 'gridfield',
        fieldLabel: '角色配置',
        columnWidth: 1,
        height: 300,
        submitFields: ['id', 'name', 'field', 'value'],
        roweditable: true,
        tbar: {add: {hidden: true}, remove: {hidden: true}}, border: false,
        model: 'App.management.project.report.model.KpiModel',
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
    }, {
        xtype: 'hidden',
        name: 'buId'
    }, {
        xtype: 'hidden',
        name: 'duId'
    }, {
        xtype: 'hidden',
        name: 'pduId'
    }, {
        xtype: 'hidden',
        name: 'poId'
    }, {
        xtype: 'hidden',
        name: 'projectId'
    }, {
        xtype: 'hidden',
        name: 'reportConfigurationId'
    }, {
        xtype: 'hidden',
        name: 'id'
    }]
})
