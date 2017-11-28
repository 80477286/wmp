Ext.define('App.project.field.ImplementationStatusComboBox', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.ImplementationStatusComboBox',
    editable: false,
    queryMode: 'local',
    valueField: 'value',
    displayField: 'name',
    store: Ext.create('Ext.data.Store', {
        fields: ['value', 'name'],
        data: [{
            value: '待启动',
            name: "待启动"
        }, {
            value: '进行中',
            name: "进行中"
        }, {
            value: '延迟',
            name: "延迟"
        }, {
            value: '终止',
            name: "终止"
        }, {
            value: '结束',
            name: '结束'
        }]
    })
})