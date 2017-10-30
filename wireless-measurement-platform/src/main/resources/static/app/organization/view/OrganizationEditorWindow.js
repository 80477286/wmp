Ext.define("App.organization.view.OrganizationEditorWindow", {
    extend: 'Extend.window.FormWindow',
    alias: 'widget.OrganizationEditorWindow',
    entity: 'entity',
    requires: [],
    url: 'organization/save',
    resetBySave: false,
    listeners: {},
    config: {
        window: {
            height: 200,
            width: 600
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
        name: 'parent.id'
    }, {
        xtype: 'hidden',
        name: 'creator'
    }, {
        xtype: 'hidden',
        name: 'cdt'
    }, {
        xtype: 'textfield',
        fieldLabel: '组织类型',
        name: 'type',
        readOnly: true
    }, {
        xtype: 'textfield',
        fieldLabel: '组织名称',
        name: 'name',
        allowBlank: false,
        blankText: '项目名称为必填字段，不能为空！',
        maxLength: 128,
        beforeLabelTextTpl: ['<span style="color:red;">*</span>']
    }]
})
