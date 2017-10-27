Ext.define("App.po.project.view.ProjectEditorWindow", {
			extend : 'Extend.window.FormWindow',
			alias : 'widget.ProjectEditorWindow',
			entity : 'entity',
			requires : ['App.commons.platform.view.field.PlatformComboBox',
					'App.commons.pdu.view.field.PduComboBox',
					'App.pm.project.view.field.RegionComboBox',
					'App.pm.project.view.field.BusinessModelComboBox',
					'App.pm.project.view.field.TeamTypeComboBox',
					'App.pm.project.view.field.StatusComboBox',
					'App.hrm.employee.view.field.EmployeeComboBox'],
			url : 'pm/project/save',
			read : 'pm/project/get_by_id',
			resetBySave : false,
			listeners : {
				afterrender : function() {
					var me = this;
					if (!Ext.isEmpty(me.pid)) {
						me.mask('加载...');
						me.load({
									url : 'project/get_by_id',
									params : {
										id : me.pid
									},
									success : function() {
										me.unmask();
									},
									failre : function() {
										me.unmask();
									}
								});
					}
				}
			},
			config : {
				window : {
					height : 400
				}
			},
			defaults : {
				labelWidth : 110,
				columnWidth : .5
			},
			items : [{
						xtype : 'hidden',
						name : 'id'
					}, {
						xtype : 'hidden',
						name : 'parent.id'
					}, {
						xtype : 'hidden',
						name : 'editTemplateId'
					}, {
						xtype : 'hidden',
						name : 'status'
					}, {
						xtype : 'textfield',
						fieldLabel : '项目名称',
						name : 'name',
						allowBlank : false,
						blankText : '项目名称为必填字段，不能为空！',
						maxLength : 128,
						beforeLabelTextTpl : ['<span style="color:red;">*</span>']
					}, {
						xtype : 'textfield',
						fieldLabel : 'PO编号',
						name : 'po',
						allowBlank : false,
						blankText : 'PO编号为必填字段，不能为空！',
						maxLength : 32,
						beforeLabelTextTpl : ['<span style="color:red;">*</span>']
					}, {
						xtype : 'PlatformComboBox',
						fieldLabel : '平台',
						displayField : 'name',
						valueField : 'name',
						name : 'platform',
						allowBlank : false,
						blankText : '平台为必填字段，不能为空！',
						maxLength : 256,
						beforeLabelTextTpl : ['<span style="color:red;">*</span>']
					}, {
						xtype : 'PduComboBox',
						fieldLabel : 'PDU/SDU',
						name : 'pdu',
						allowBlank : false,
						blankText : 'PDU/SDU为必填字段，不能为空！',
						maxLength : 128,
						beforeLabelTextTpl : ['<span style="color:red;">*</span>']
					}, {
						xtype : 'RegionComboBox',
						fieldLabel : '地域',
						name : 'region',
						allowBlank : false,
						blankText : '地域为必填字段，不能为空！',
						maxLength : 128,
						beforeLabelTextTpl : ['<span style="color:red;">*</span>']
					}, {
						xtype : 'TeamTypeComboBox',
						fieldLabel : '团队类型',
						name : 'teamType',
						allowBlank : false,
						blankText : '团队类型为必填字段，不能为空！',
						maxLength : 128,
						beforeLabelTextTpl : ['<span style="color:red;">*</span>']
					}, {
						xtype : 'BusinessModelComboBox',
						fieldLabel : '商务形式',
						name : 'businessModel',
						allowBlank : false,
						blankText : '商务形式为必填字段，不能为空！',
						maxLength : 128,
						beforeLabelTextTpl : ['<span style="color:red;">*</span>']
					}, {
						xtype : 'datefield',
						fieldLabel : '立项时间',
						name : 'startDate',
						format : 'Y-m-d',
						editable : false,
						allowBlank : false,
						blankText : '立项时间为必填字段，不能为空！',
						beforeLabelTextTpl : ['<span style="color:red;">*</span>']
					}, {
						xtype : 'datefield',
						fieldLabel : '计划结项时间',
						name : 'plannedEndDate',
						format : 'Y-m-d',
						editable : false,
						allowBlank : false,
						blankText : '计划结项时间为必填字段，不能为空！',
						beforeLabelTextTpl : ['<span style="color:red;">*</span>']
					}, {
						xtype : 'numberfield',
						fieldLabel : '业务规划占比',
						name : 'businessRate',
						decimalPrecision : 2,
						minValue : 0.01,
						allowBlank : false,
						blankText : '业务规划占比为必填字段，不能为空！',
						beforeLabelTextTpl : ['<span style="color:red;">*</span>']
					}, {
						xtype : 'numberfield',
						fieldLabel : '项目总工作量',
						name : 'totalWorkloads',
						allowBlank : false,
						decimalPrecision : 2,
						minValue : 0.01,
						blankText : '规划人力为必填字段，不能为空！',
						beforeLabelTextTpl : ['<span style="color:red;">*</span>']
					}, {
						xtype : 'numberfield',
						fieldLabel : '规划人力',
						name : 'humanResources',
						allowBlank : false,
						decimalPrecision : 2,
						minValue : 0.01,
						blankText : '规划人力为必填字段，不能为空！',
						beforeLabelTextTpl : ['<span style="color:red;">*</span>']
					}, {
						xtype : 'textfield',
						fieldLabel : '实际人力',
						name : 'currentHumanResources',
						readOnly : true,
						value : 0
					}, {
						xtype : 'textfield',
						fieldLabel : '华为项目经理',
						name : 'huaweiManager',
						allowBlank : false,
						blankText : '华为项目经理为必填字段，不能为空！',
						beforeLabelTextTpl : ['<span style="color:red;">*</span>']
					}, {
						xtype : 'EmployeeComboBox',
						fieldLabel : '中软项目经理',
						name : 'employee.id',
						allowBlank : false,
						blankText : '中软项目经理为必填字段，不能为空！',
						beforeLabelTextTpl : ['<span style="color:red;">*</span>'],
						extraParams : {
							'params.role_s_eq' : '项目经理'
						}
					}]
		})
