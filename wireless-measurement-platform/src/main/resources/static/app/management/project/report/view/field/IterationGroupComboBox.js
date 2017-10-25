Ext.define('App.management.project.report.view.field.IterationGroupComboBox', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.IterationGroupComboBox',
    editable: false,
    multiSelect: false,
    store: ['需求', '设计', '开发', '测试', '构建', '转测试', '迭代管理', '工程能力', '验收']
})