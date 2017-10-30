Ext.define("App.projectorder.view.ProjectOrderEditorWindow", {
    extend: 'Extend.window.FormWindow',
    alias: 'widget.ProjectOrderEditorWindow',
    entity: 'entity',
    requires: [],
    url: 'projectorder/save',
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
        name: 'organization.id'
    }, {
        xtype: 'hidden',
        name: 'creator'
    }, {
        xtype: 'hidden',
        name: 'cdt'
    }, {
        xtype: 'textfield',
        fieldLabel: 'PO名称',
        name: 'name',
        allowBlank: false,
        blankText: 'PO名称为必填字段，不能为空！',
        maxLength: 128,
        beforeLabelTextTpl: ['<span style="color:red;">*</span>']
    }]
})
