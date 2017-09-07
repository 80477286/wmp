Ext.define('App.version.view.VersionEditor', {
    extend: 'Extend.window.FormWindow',
    alias: 'widget.VersionEditor',
    requires: ['App.components.form.field.StatusComboBox'],
    entity: 'entity',
    title: '版本编辑',
    window: {
        width: 1100,
        height: 650
    },
    defaults: {
        columnWidth: 0.25,
        labelWidth: 100
    },
    loadRecord: function (record) {
        if (Ext.isEmpty(record)) {
            Extend.Msg.error('错误', '无法加载需要编辑的数据，目标数据为空！')
            return;
        }
        if (this.quickCreate === true) {
            record.set('id', null);
        }
        this.callParent(arguments);
    },
    items: [{
        xtype: 'hidden',
        name: 'id'
    }, {
        xtype: 'textfield',
        name: 'name',
        fieldLabel: '版本名称',
        maxLength: '256',
        allowBlank: false,
        blankText: '名称为必填字段，不能为空！'
    }, {
        xtype: 'textfield',
        name: 'versionManager',
        fieldLabel: '合作方版本经理',
        maxLength: '64',
        allowBlank: false,
        blankText: '中软版本经理为必填字段，不能为空！',
        beforeLabelTextTpl: ['<span style="color:red;">*</span>']
    }, {
        xtype: 'datefield',
        fieldLabel: '开始时间',
        name: 'startDate',
        format: 'Y-m-d',
        editable: false,
        allowBlank: false,
        blankText: '开始时间为必填字段，不能为空！',
        beforeLabelTextTpl: ['<span style="color:red;">*</span>'],
        listeners: {
            change: function ($this, newValue, oldValue, eOpts) {
            }
        }
    }, {
        xtype: 'datefield',
        fieldLabel: '结束时间',
        name: 'plannedEndDate',
        format: 'Y-m-d',
        editable: false,
        listeners: {
            change: function ($this, newValue, oldValue, eOpts) {
                var me = this;
            }
        }
    }, {
        xtype: 'numberfield',
        fieldLabel: '总工作量',
        name: 'totalWorkloads',
        decimalPrecision: 2,
        minValue: 0.01,
        allowBlank: false,
        blankText: '总工作量为必填字段，不能为空！',
        beforeLabelTextTpl: ['<span style="color:red;">*</span>']
    }, {
        xtype: 'StatusComboBox',
        fieldLabel: '项目状态',
        name: 'status',
        allowBlank: false,
        blankText: '项目状态为必填字段，不能为空！',
        beforeLabelTextTpl: ['<span style="color:red;">*</span>']
    }, {
        xtype: 'textfield',
        fieldLabel: '描述',
        name: 'description',
        columnWidth: 1
    }]
})
