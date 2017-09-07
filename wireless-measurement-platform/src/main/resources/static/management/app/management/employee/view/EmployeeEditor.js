Ext.define("App.management.employee.view.EmployeeEditor", {
    extend: 'Extend.window.FormWindow',
    alias: 'widget.employee_editor',
    config: {
        window: {
            title: '修改人力信息',
            width: 1024,
            height: 600
        }
    },
    defaults: {
        columnWidth: 1,
        xtype: 'textfield'
    },
    items: [{
        xtype: 'hidden',
        name: 'id'
    }, {
        name: 'name',
        fieldLabel: '名称',
        allowBlank: false,
        blankText: '名称不能为空',
        beforeLabelTextTpl: ['<span style="color:red;">*</span>']
    }, {
        name: 'chinasoftNumber',
        fieldLabel: '中软编号',
        blankText: '中软编号不能为空',
        beforeLabelTextTpl: ['<span style="color:red;">*</span>']
    }, {
        name: 'huaweiNumber',
        fieldLabel: '华为编号',
        blankText: '华为编号不能为空',
        beforeLabelTextTpl: ['<span style="color:red;">*</span>']
    }, {
        name: 'role',
        fieldLabel: '角色'
    }, {
        name: 'status',
        fieldLabel: '状态'
    }]
})
