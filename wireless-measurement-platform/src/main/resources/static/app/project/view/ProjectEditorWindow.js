Ext.define("App.project.view.ProjectEditorWindow", {
    extend: 'Extend.window.FormWindow',
    alias: 'widget.ProjectEditorWindow',
    entity: 'entity',
    requires: ['App.hrm.employee.field.EmployeeComboBox'],
    url: 'project/save',
    resetBySave: false,
    listeners: {},
    config: {
        window: {
            height: 600,
            width: 800
        }
    },
    defaults: {
        labelWidth: 110,
        columnWidth: 1
    },
    items: [{
        xtype: 'hidden',
        name: 'id'
    }, {
        xtype: 'hidden',
        name: 'projectOrder.id'
    }, {
        xtype: 'hidden',
        name: 'creator'
    }, {
        xtype: 'hidden',
        name: 'cdt'
    }, {
        xtype: 'textfield',
        fieldLabel: '项目名称',
        name: 'name',
        allowBlank: false,
        blankText: '项目名称为必填字段，不能为空！',
        maxLength: 128,
        beforeLabelTextTpl: ['<span style="color:red;">*</span>']
    }, {
        xtype: 'datefield',
        fieldLabel: '项目开始时间',
        name: 'startDate',
        format: 'Y-m-d',
        editable: false,
        allowBlank: false,
        blankText: '立项时间为必填字段，不能为空！',
        beforeLabelTextTpl: ['<span style="color:red;">*</span>']
    }, {
        xtype: 'datefield',
        fieldLabel: '计划结项时间',
        name: 'plannedEndDate',
        format: 'Y-m-d',
        editable: false,
        allowBlank: false,
        blankText: '计划结项时间为必填字段，不能为空！',
        beforeLabelTextTpl: ['<span style="color:red;">*</span>']
    }, {
        xtype: 'EmployeeComboBox',
        fieldLabel: '项目经理',
        name: 'projectManager',
        allowBlank: false,
        valueField:'huaweiNumber',
        blankText: '中软项目经理为必填字段，不能为空！',
        beforeLabelTextTpl: ['<span style="color:red;">*</span>'],
        extraParams: {
            'params.role_eq': '项目经理'
        }
    }, {
        xtype: 'textarea',
        fieldLabel: '描述',
        name: 'description'
    }]
})
