Ext.define("App.iteration.view.IterationEditor", {
    extend: 'Extend.window.FormWindow',
    alias: 'widget.iteration_editor',
    requires: ['App.project.field.ProjectComboBox'],
    config: {
        window: {
            title: '修改迭代信息',
            width: 800,
            height: 400
        },
        entity: 'entity'
    },
    defaults: {
        columnWidth: 1,
        xtype: 'textfield',
        labelWidth: 120,
        beforeLabelTextTpl: ['<span style="color:red;">*</span>'],
        allowBlank: false,
        blankText: '不允许为空'
    },
    items: [{
        fieldLabel: 'ID',
        name: 'id',
        hidden: true,
        allowBlank: true
    }, {
        fieldLabel: '迭代名称',
        name: 'name'
    }, {
        fieldLabel: '迭代计划开始日期',
        name: 'planedStartDate',
        xtype: 'datefield',
        format: 'Y-m-d',
        listeners: {
            change: function ($this, newValue, oldValue, eOpts) {
                if (this.up().down('[name=id]').getValue() == "") {
                    return;
                }
                if (readOnly(Ext.Date.format(newValue, 'Y-m-d'), Ext.Date.format(new Date(), 'Y-m-d'))) {
                    this.setReadOnly(true);
                }
            }
        }
    }, {
        fieldLabel: '迭代计划结束日期',
        name: 'planedEndDate',
        xtype: 'datefield',
        format: 'Y-m-d',
        listeners: {
            change: function ($this, newValue, oldValue, eOpts) {
                if (this.up().down('[name=id]').getValue() == "") {
                    return;
                }
                if (readOnly(Ext.Date.format(newValue, 'Y-m-d'), Ext.Date.format(new Date(), 'Y-m-d'))) {
                    this.setReadOnly(true);
                }
            }
        }
    }, {
        fieldLabel: '迭代实际开始日期',
        name: 'actuaStartDate',
        xtype: 'datefield',
        format: 'Y-m-d',
        listeners: {
            change: function ($this, newValue, oldValue, eOpts) {
                if (this.up().down('[name=id]').getValue() == "") {
                    return;
                }
                if (readOnly(Ext.Date.format(newValue, 'Y-m-d'), Ext.Date.format(new Date(), 'Y-m-d'))) {
                    this.setReadOnly(true);
                }
            }
        }
    }, {
        fieldLabel: '迭代实际结束日期',
        name: 'actualEndDate',
        xtype: 'datefield',
        format: 'Y-m-d',
        listeners: {
            change: function ($this, newValue, oldValue, eOpts) {
                if (this.up().down('[name=id]').getValue() == "") {
                    return;
                }
                if (readOnly(Ext.Date.format(newValue, 'Y-m-d'), Ext.Date.format(new Date(), 'Y-m-d'))) {
                    this.setReadOnly(true);
                }
            }
        }
    }, {
        fieldLabel: '所属项目',
        name: 'project.id',
        xtype: 'ProjectComboBox'
    }, {
        fieldLabel: '描述',
        name: 'description',
        beforeLabelTextTpl: [''],
        allowBlank: true,
        xtype: 'textarea'
    }, {
        fieldLabel: '创建人',
        name: 'creator',
        allowBlank: true,
        hidden: true
    }, {
        xtype: 'cdtcolumn',
        name: '创建时间',
        dataIndex: 'cdt',
        allowBlank: true,
        hidden: true
    }
    ]
});

function readOnly(oldDate, newDate) {
    var oldYear = oldDate.substring(0, oldDate.indexOf('-'));
    var newYear = newDate.substring(0, newDate.indexOf('-'));
    if (newYear > oldYear) {
        return true;
    } else if (newYear == oldYear) {
        oldYear = oldDate.substring(oldDate.indexOf('-') + 1, oldDate.length);
        newYear = newDate.substring(newDate.indexOf('-') + 1, newDate.length);
        var oldMonth = oldYear.substring(0, oldYear.indexOf('-'));
        var newMonth = newYear.substring(0, newYear.indexOf('-'));
        if (oldMonth < newMonth) {
            return true;
        }
    }
    return false;
}
