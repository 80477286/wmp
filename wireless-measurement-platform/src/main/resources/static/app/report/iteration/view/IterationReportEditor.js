Ext.define("App.report.iteration.view.IterationReportEditor", {
    extend: 'Extend.window.FormWindow',
    alias: ['widget.IterationReportEditor'],
    requires: ['App.report.model.KpiModel',
        'App.iteration.field.IterationComboBox',
        'App.report.iteration.field.IterationGroupComboBox',
        'App.reportconfiguration.field.ReportConfigurationComboBox'],
    config: {
        unmaskable: false,
        entity: 'entity',
        defaults: {
            columnWidth: 1
        },
        window: {
            title: '修改资源信息',
            width: 800,
            height: 500,
            resizable: false
        }
    },
    items: [{
        xtype: 'ReportConfigurationComboBox',
        name: 'reportConfigurationType',
        fieldLabel: '度量类型',
        displayField: 'type',
        valueField: 'type',
        readOnly: true,
        submitValues: false, listeners: {
            select: function ($this, record, eOpts) {
                this.up('IterationReportEditor').initKips(record.get('type'));
            }
        }
    }, {
        xtype: 'IterationComboBox',
        name: 'iteration.id',
        fieldLabel: '迭代',
        allowBlank: false,
        blankText: '迭代为必填字段，不允许为空！',
        readOnly: true
    }, {
        name: 'kpis',
        xtype: 'gridfield',
        fieldLabel: '角色配置',
        columnWidth: 1,
        height: 300,
        submitFields: ['id', 'name', 'field', 'value'],
        roweditable: true,
        tbar: {add: {hidden: true}, remove: {hidden: true}}, border: false,
        model: 'App.report.model.KpiModel',
        listeners: {
            selectionchange: function ($this, selected, eOpts) {
                this.down('button[itemId="btnDelete"]').disable();
                if (selected.length > 0 && selected[0].get('abandoned') == true) {
                    this.down('button[itemId="btnDelete"]').enable();
                }
            }
        },
        tbar: ['->', {
            text: '删除',
            itemId: 'btnDelete',
            disabled: true,
            handler: function () {
                var record = this.up('gridfield').getSelection()[0];
                this.up('gridpanel').getStore().remove([record])
            }
        }],
        columns: [{
            header: '指标名称',
            dataIndex: 'name',
            renderer: function (v, m, r) {
                if (r.get('abandoned') == true) {
                    return "<span style='background-color: red;'>" + v + "</span>"
                }
                return v;
            }
        }, {
            header: '字段名',
            dataIndex: 'field'
        }, {
            header: '值',
            dataIndex: 'value', editor: {xtype: 'textfield'}
        }]
    }, {
        xtype: 'hidden',
        name: 'bu.id'
    }, {
        xtype: 'hidden',
        name: 'du.id'
    }, {
        xtype: 'hidden',
        name: 'pdu.id'
    }, {
        xtype: 'hidden',
        name: 'projectOrder.id'
    }, {
        xtype: 'hidden',
        name: 'project.id'
    }, {
        xtype: 'hidden',
        name: 'id'
    }],
    loadRecord: function (record) {
        var me = this;
        me.callParent(arguments);

        if (Ext.isEmpty(record.get('id')) || record.get('id').indexOf('-') > -1) {
            me.down('IterationComboBox').setReadOnly(false);
        }
        me.initKips(record.get('reportConfigurationType'));
    },
    initKips: function (type) {
        var me = this;
        Ext.Ajax.request({
            url: 'report_configuration/get_report_configuration',
            params: {
                'type': type,
                'projectId': app.project.id
            },
            success: function (resp) {
                var reportConfiguration = resp.result.data;
                var gridfield = me.down('gridfield');
                for (var i = 0; i < reportConfiguration.kpiConfigurations.length; i++) {
                    var kpi = reportConfiguration.kpiConfigurations[i];
                    var rds = gridfield.getStore().queryBy(function (record, id) {
                        if (record.get('field') == kpi.field) {
                            return true;
                        }
                        return false;
                    });
                    //如果报表数据在配置 的KPI中存在则更新一下name和field，不然增加一个指标
                    if (rds.getCount() > 0) {
                        var rd = rds.getAt(0);
                        rd.set('name', kpi.name);
                    } else {
                        var newrd = Ext.create('App.report.model.KpiModel', {
                            name: kpi.name,
                            field: kpi.field,
                            value: null
                        });
                        newrd.set('id', newrd.get('id').replace(/-/g, ''));
                        gridfield.loadRecords([newrd], true);
                    }
                }
                for (var i = 0; i < gridfield.getStore().getCount(); i++) {
                    var recd = gridfield.getStore().getAt(i);
                    var find = false;
                    for (var j = 0; j < reportConfiguration.kpiConfigurations.length; j++) {
                        var kpi = reportConfiguration.kpiConfigurations[j];
                        if (recd.get('name') == kpi.name) {
                            find = true;
                        }
                    }
                    if (find == false) {
                        recd.set('abandoned', true);
                    }
                }
            },
            callback: function () {
                me.window.unmask();
            }
        });
    }
})
