Ext.define("App.project.view.ProjectEditorWindow", {
    extend: 'Extend.window.FormWindow',
    alias: 'widget.ProjectEditorWindow',
    entity: 'entity',
    requires: [],
    url: 'project/save',
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
    }]
})
