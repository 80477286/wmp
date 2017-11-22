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
            height: 500,
            width: 1000
        }
    },
    defaults: {
        labelWidth: 110,
        columnWidth: 0.5
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
        xtype: 'textfield',
        fieldLabel: '项目类型',
        name: 'projectType',
        allowBlank: false,
        blankText: '项目类型为必填字段，不能为空！',
        maxLength: 128,
        beforeLabelTextTpl: ['<span style="color:red;">*</span>']
    }, {
        xtype: 'textfield',
        fieldLabel: '项目编码',
        name: 'projectCode',
        allowBlank: false,
        blankText: '项目名称为必填字段，不能为空！',
        maxLength: 128,
        beforeLabelTextTpl: ['<span style="color:red;">*</span>']
    }, {
        xtype: 'textfield',
        fieldLabel: 'PO名称',
        name: 'projectOrder.name',
        readOnly: true,
        maxLength: 128
    }, {
        xtype: 'textfield',
        fieldLabel: '业务大类',
        name: 'businessCategory',
        allowBlank: false,
        blankText: '业务大类为必填字段，不能为空！',
        maxLength: 128,
        beforeLabelTextTpl: ['<span style="color:red;">*</span>']
    }, {
        xtype: 'textfield',
        fieldLabel: '业务小类',
        name: 'businessSubclasses',
        allowBlank: false,
        blankText: '业务小类为必填字段，不能为空！',
        maxLength: 128,
        beforeLabelTextTpl: ['<span style="color:red;">*</span>']
    }, {
        xtype: 'textfield',
        fieldLabel: '是否上网项目',
        name: 'isInternetProject',
        allowBlank: false,
        blankText: '是否上网项目为必填字段，不能为空！',
        maxLength: 128,
        beforeLabelTextTpl: ['<span style="color:red;">*</span>']
    }, {
        xtype: 'textfield',
        fieldLabel: '规模(KLOC)',
        name: 'size',
        allowBlank: false,
        blankText: '规模(KLOC)为必填字段，不能为空！',
        maxLength: 128,
        beforeLabelTextTpl: ['<span style="color:red;">*</span>']
    }, {
        xtype: 'textfield',
        fieldLabel: 'QA',
        name: 'qa',
        allowBlank: false,
        blankText: 'QA为必填字段，不能为空！',
        maxLength: 128,
        beforeLabelTextTpl: ['<span style="color:red;">*</span>']
    }, {
        xtype: 'textfield',
        fieldLabel: 'PO占比',
        name: 'poProportion',
        allowBlank: false,
        blankText: 'PO占比为必填字段，不能为空！',
        maxLength: 128,
        beforeLabelTextTpl: ['<span style="color:red;">*</span>']
    }, {
        xtype: 'textfield',
        fieldLabel: '项目工作量',
        name: 'projectWorkload',
        allowBlank: false,
        blankText: '项目工作量为必填字段，不能为空！',
        maxLength: 128,
        beforeLabelTextTpl: ['<span style="color:red;">*</span>']
    }, {
        xtype: 'textfield',
        fieldLabel: '计费类型',
        name: 'billingType',
        allowBlank: false,
        blankText: '计费类型为必填字段，不能为空！',
        maxLength: 128,
        beforeLabelTextTpl: ['<span style="color:red;">*</span>']
    }, {
        xtype: 'textfield',
        fieldLabel: '实施状态',
        name: 'implementationStatus',
        allowBlank: false,
        blankText: '实施状态为必填字段，不能为空！',
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
        valueField: 'huaweiNumber',
        blankText: '中软项目经理为必填字段，不能为空！',
        beforeLabelTextTpl: ['<span style="color:red;">*</span>'],
        extraParams: {
            'params.role_eq': '项目经理'
        }
    }, {
        xtype: 'textarea',
        fieldLabel: '描述',
        name: 'description',
        columnWidth: 1
    }]
})
