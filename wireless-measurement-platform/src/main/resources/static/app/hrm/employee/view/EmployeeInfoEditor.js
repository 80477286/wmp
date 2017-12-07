Ext.define("App.hrm.employee.view.EmployeeInfoEditor", {
    extend: 'Extend.window.FormWindow',
    alias: 'widget.employee_editor',
    config: {
        window: {
            title: '修改人员信息',
            width: 1024,
            height: 600
        },
        entity: ''
    },
    defaults: {
        columnWidth: 1,
        xtype: 'textfield'
    },
    items: [{
        fieldLabel: 'ID',
        name: 'id',
        hidden: true
    }, {
        fieldLabel: '姓名',
        name: 'name'
    }, {
        fieldLabel: '中软工号',
        name: 'chinasoftNumber'
    }, {
        fieldLabel: '华为工号',
        name: 'huaweiNumber'
    }, {
        fieldLabel: '角色',
        name: 'role'
    }, {
        fieldLabel: '状态',
        name: 'status'
    }, {
        fieldLabel: '创建人',
        name: 'creator',
        hidden: true
    }, {
        xtype: 'cdtcolumn',
        name: '创建时间',
        dataIndex: 'cdt',
        hidden: true
    }]
})
