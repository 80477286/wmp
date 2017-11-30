Ext.define("App.projectorder.view.ProjectOrderFormPanel", {
    extend: 'Ext.form.Panel',
    alias: 'widget.ProjectOrderFormPanel',
    requires: ['App.project.field.ProjectTypeComboBox', 'App.project.field.SiteComboBox'],
    defaults: {
        labelWidth: 110,
        columnWidth: 1,
        readOnly: true
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
        fieldLabel: 'po号',
        name: 'po'
    }, {
        xtype: 'textfield',
        fieldLabel: 'PO名称',
        name: 'name'
    }, {
        xtype: 'textfield',
        fieldLabel: '内部PO号',
        name: 'innerPo'
    }, {
        xtype: 'textfield',
        fieldLabel: '合同类型',
        name: 'contractType'
    }, {
        xtype: 'textfield',
        fieldLabel: '交付部',
        name: 'deliveryDepartment'
    }, {
        xtype: 'textfield',
        fieldLabel: '华为PDU',
        name: 'parent.name',
    }, {
        xtype: 'ProjectTypeComboBox',
        fieldLabel: '项目类型',
        name: 'projectType'
    }, {
        xtype: 'SiteComboBox',
        fieldLabel: 'onSite/offSite',
        name: 'onSite'
    }, {
        xtype: 'textfield',
        fieldLabel: '交付部经理',
        name: 'deliveryManager'
    }, {
        xtype: 'textfield',
        fieldLabel: '华为PDU外包代表',
        name: 'huaweiPduOutsourcingRepresentatives'
    }, {
        xtype: 'textfield',
        fieldLabel: '合同工作量(人/天)',
        name: 'contractWorkload'
    }, {
        xtype: 'textfield',
        fieldLabel: '合同金额(元)',
        name: 'contractAmount'
    }, {
        xtype: 'datefield',
        fieldLabel: '立项时间',
        name: 'startTime',
        format: 'Y-m-d'
    }, {
        xtype: 'datefield',
        fieldLabel: '预计开始时间',
        name: 'planStartTime',
        format: 'Y-m-d'
    }, {
        xtype: 'datefield',
        fieldLabel: '项目结束时间',
        name: 'endTime',
        format: 'Y-m-d'
    }]
})