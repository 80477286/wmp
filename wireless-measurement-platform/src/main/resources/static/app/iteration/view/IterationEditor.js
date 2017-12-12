Ext.define("App.iteration.view.IterationEditor", {
    extend: 'Extend.window.FormWindow',
    alias: 'widget.iteration_editor',
    config: {
        window: {
            title: '修改迭代信息',
            width: 1024,
            height: 600
        },
        entity: ''
    },
    defaults: {
        columnWidth: 1,
        xtype: 'textfield',
        labelWidth: 160,
        beforeLabelTextTpl: ['<span style="color:red;">*</span>'],
        allowBlank: false,
        blankText: '不允许为空'
    },
    items: [{
        fieldLabel: 'ID',
        name: 'id',
        hidden: true,
        allowBlank: true
    }, {
        fieldLabel: '迭代名称',
        name: 'name'
    }, {
        fieldLabel: '迭代计划开始日期',
        name: 'planedStartDate',
        xtype: 'datefield',
        format: 'Y-m-d'
    }, {
        fieldLabel: '迭代计划结束日期',
        name: 'planedEndDate',
        xtype: 'datefield',
        format: 'Y-m-d'
    }, {
        fieldLabel: '迭代实际开始日期',
        name: 'actuaStartDate',
        xtype: 'datefield',
        format: 'Y-m-d'
    }, {
        fieldLabel: '迭代实际结束日期',
        name: 'actualEndDate',
        xtype: 'datefield',
        format: 'Y-m-d'
    }, {
        fieldLabel: '所属项目',
        name: 'project.name'
    }, {
        fieldLabel: '描述',
        name: 'description',
        beforeLabelTextTpl: [''],
        allowBlank: true
    }, {
        fieldLabel: '创建人',
        name: 'creator',
        allowBlank: true,
        hidden: true
    }, {
        xtype: 'cdtcolumn',
        name: '创建时间',
        dataIndex: 'cdt',
        allowBlank: true,
        hidden: true
    }]
})
