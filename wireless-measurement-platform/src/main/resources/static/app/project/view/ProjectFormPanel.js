Ext.define("App.project.view.ProjectFormPanel", {
    extend: 'Ext.form.Panel',
    alias: 'widget.ProjectFormPanel',
    requires: ['App.hrm.employee.field.EmployeeComboBox', 'App.project.field.ProjectTypeComboBox', 'App.project.field.IsInternetProjectComboBox', 'App.project.field.BillingTypeComboBox',
        'App.project.field.ImplementationStatusComboBox'],
    defaults: {
        readOnly: true
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
        fieldLabel: 'PO号',
        name: 'projectOrder.po'
    }, {
        xtype: 'textfield',
        fieldLabel: 'PO名称',
        name: 'projectOrder.name'
    }, {
        xtype: 'textfield',
        fieldLabel: '项目名称',
        name: 'name'
    }, {
        xtype: 'ProjectTypeComboBox',
        fieldLabel: '项目类型',
        name: 'projectType'
    }, {
        xtype: 'textfield',
        fieldLabel: '项目编码',
        name: 'projectCode'
    }, {
        xtype: 'textfield',
        fieldLabel: '项目工作量',
        name: 'projectWorkload'
    }, {
        xtype: 'textfield',
        fieldLabel: '业务大类',
        name: 'businessCategory'
    }, {
        xtype: 'textfield',
        fieldLabel: '业务小类',
        name: 'businessSubclasses'
    }, {
        xtype: 'IsInternetProjectComboBox',
        fieldLabel: '是否上网项目',
        name: 'isInternetProject'
    }, {
        xtype: 'textfield',
        fieldLabel: '规模(KLOC)',
        name: 'size'
    }, {
        xtype: 'EmployeeComboBox',
        fieldLabel: 'QA',
        name: 'qa',
        valueField: 'huaweiNumber'
    }, {
        xtype: 'textfield',
        fieldLabel: 'PO占比(%)',
        name: 'poProportion'
    }, {
        xtype: 'BillingTypeComboBox',
        fieldLabel: '计费类型',
        name: 'billingType'
    }, {
        xtype: 'ImplementationStatusComboBox',
        fieldLabel: '实施状态',
        name: 'implementationStatus'
    }, {
        xtype: 'datefield',
        fieldLabel: '项目开始时间',
        name: 'startDate',
        format: 'Y-m-d'
    }, {
        xtype: 'datefield',
        fieldLabel: '计划结项时间',
        name: 'plannedEndDate',
        format: 'Y-m-d'
    }, {
        xtype: 'EmployeeComboBox',
        fieldLabel: '项目经理',
        name: 'projectManager',
        extraParams: {
            'params.role_eq': '项目经理'
        }
    }, {
        xtype: 'textarea',
        fieldLabel: '描述',
        name: 'description',
        columnWidth: 1
    }]
});