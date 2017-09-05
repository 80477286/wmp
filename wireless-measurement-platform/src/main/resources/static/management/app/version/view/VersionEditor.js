Ext.define('App.version.view.VersionEditor', {
	extend : 'Extend.window.FormWindow',
	alias : 'widget.VersionEditor',
	requires : ['App.commons.platform.view.field.PlatformComboBox',
			'App.components.form.field.StatusComboBox',
			'App.version.view.field.VersionHumanResourceGridField',
			'App.version.view.field.MonthHumanResourcePlanGridField',
			'App.version.view.field.MonthHumanResourcePlanDetailsGridField'],
	entity : 'entity',
	title : '版本编辑',
	window : {
		width : 1100,
		height : 650
	},
	defaults : {
		columnWidth : 0.25,
		labelWidth : 100
	},
	loadRecord : function(record) {
		if (Ext.isEmpty(record)) {
			Extend.Msg.error('错误', '无法加载需要编辑的数据，目标数据为空！')
			return;
		}
		if (this.quickCreate === true) {
			record.set('id', null);
		}
		this.callParent(arguments);
		this.initMonthHumanResourcePlan();
	},
	items : [{
				xtype : 'hidden',
				name : 'id'
			}, {
				xtype : 'textfield',
				name : 'name',
				fieldLabel : '版本名称',
				maxLength : '256',
				allowBlank : false,
				blankText : '名称为必填字段，不能为空！'
			}, {
				xtype : 'PlatformComboBox',
				fieldLabel : '平台',
				displayField : 'name',
				valueField : 'id',
				name : 'platform.id',
				allowBlank : false,
				blankText : '平台为必填字段，不能为空！',
				maxLength : 256,
				beforeLabelTextTpl : ['<span style="color:red;">*</span>']
			}, {
				xtype : 'textfield',
				name : 'projectCode',
				fieldLabel : '版本项目编码',
				maxLength : '256',
				allowBlank : false,
				blankText : '版本项目编码为必填字段，不能为空！',
				beforeLabelTextTpl : ['<span style="color:red;">*</span>']
			}, {
				xtype : 'textfield',
				name : 'huaweiPo',
				fieldLabel : '华为PO',
				maxLength : '64',
				allowBlank : false,
				blankText : '华为PO为必填字段，不能为空！',
				beforeLabelTextTpl : ['<span style="color:red;">*</span>']
			}, {
				xtype : 'textfield',
				name : 'chinasoftPo',
				fieldLabel : '合作方PO',
				maxLength : '64',
				allowBlank : false,
				blankText : '中软PO为必填字段，不能为空！',
				beforeLabelTextTpl : ['<span style="color:red;">*</span>']
			}, {
				xtype : 'textfield',
				name : 'versionManager',
				fieldLabel : '合作方版本经理',
				maxLength : '64',
				allowBlank : false,
				blankText : '中软版本经理为必填字段，不能为空！',
				beforeLabelTextTpl : ['<span style="color:red;">*</span>']
			}, {
				xtype : 'datefield',
				fieldLabel : '开始时间',
				name : 'startDate',
				format : 'Y-m-d',
				editable : false,
				allowBlank : false,
				blankText : '开始时间为必填字段，不能为空！',
				beforeLabelTextTpl : ['<span style="color:red;">*</span>'],
				listeners : {
					change : function($this, newValue, oldValue, eOpts) {
						this.up().initMonthHumanResourcePlan();
					}
				}
			}, {
				xtype : 'datefield',
				fieldLabel : '结束时间',
				name : 'plannedEndDate',
				format : 'Y-m-d',
				editable : false,
				listeners : {
					change : function($this, newValue, oldValue, eOpts) {
						var me = this;
						me.up().initMonthHumanResourcePlan();
					}
				}
			}, {
				xtype : 'numberfield',
				fieldLabel : '总工作量',
				name : 'totalWorkloads',
				decimalPrecision : 2,
				minValue : 0.01,
				allowBlank : false,
				blankText : '总工作量为必填字段，不能为空！',
				beforeLabelTextTpl : ['<span style="color:red;">*</span>']
			}, {
				xtype : 'StatusComboBox',
				fieldLabel : '项目状态',
				name : 'status',
				allowBlank : false,
				blankText : '项目状态为必填字段，不能为空！',
				beforeLabelTextTpl : ['<span style="color:red;">*</span>']
			}, {
				xtype : 'textfield',
				fieldLabel : 'TMSS版本映射',
				name : 'tmssVersionMapping',
				regex : /^[a-zA-Z0-9][a-zA-Z0-9,]*[a-zA-Z0-9]$/,
				regexText : 'TMSS映射格式错误，只允许输入：字母数字和半角逗号，不能以逗号开头或结尾',
				columnWidth : 1
			}, {
				xtype : 'textfield',
				fieldLabel : 'DTS版本映射',
				name : 'dtsVersionMapping',
				columnWidth : 1
			}, {
				xtype : 'textfield',
				fieldLabel : '业务版本映射',
				name : 'bizVersionMapping',
				columnWidth : 1
			}, {
				xtype : 'textfield',
				fieldLabel : '描述',
				name : 'description',
				columnWidth : 1
			}, {
				xtype : 'tabpanel',
				columnWidth : 1,
				height : 320,
				items : [{
					title : '人力预算',
					layout : 'hbox',
					items : [{
						margin : '0 1 0 0',
						width : '50%',
						height : '100%',
						xtype : 'MonthHumanResourcePlanGridField',
						title : '月度预算',
						name : 'monthHumanResourcePlans',
						submitFields : ['id', 'month', 'plannedHumanResources',
								'activityHumanResourcePlans.id',
								'activityHumanResourcePlans.activityType',
								'activityHumanResourcePlans.plannedHumanResources'],
						listeners : {
							select : function($this, record) {
								if (!Ext.isEmpty(record)) {
									this
											.up()
											.down('MonthHumanResourcePlanDetailsGridField')
											.enable();
								} else {
									this
											.up()
											.down('MonthHumanResourcePlanDetailsGridField')
											.disable();
								}
							},
							editRecord : function($this, record) {
								this
										.up()
										.down('MonthHumanResourcePlanDetailsGridField')
										.loadDatas(record
												.get('activityHumanResourcePlans'));
							}
						}
					}, {
						margin : '0 0 0 1',
						width : '50%',
						height : '100%',
						xtype : 'MonthHumanResourcePlanDetailsGridField',
						title : '预算详细',
						disabled : true,
						listeners : {
							dataremove : function(ids) {
								var me = this;
								var plansGrid = me
										.up()
										.down('MonthHumanResourcePlanGridField')
								var sls = plansGrid.getSelection();
								if (sls.length > 0) {
									var ahps = sls[0]
											.get('activityHumanResourcePlans');
									var old = Ext.Array.findBy(ahps, function(
													item) {
												if (item.id === ids[0]
														.get('id')) {
													return true;
												}
												return false;
											})
									if (!Ext.isEmpty(old)) {
										Ext.Array.remove(ahps, old);
									}
								}
							},
							datachange : function($this, datas) {
								var me = this;
								var plansGrid = me
										.up()
										.down('MonthHumanResourcePlanGridField')
								var sls = plansGrid.getSelection();
								if (sls.length > 0) {
									var plannedHumanResources = 0;
									if (!Ext.isEmpty(datas) && datas.length > 0) {
										Ext.Array.each(datas, function(data) {
											plannedHumanResources += new Number(data.plannedHumanResources);
										});
									}
									sls[0].set('plannedHumanResources',
											plannedHumanResources);
									sls[0].set('activityHumanResourcePlans',
											datas);
								}
							}
						}
					}]
				}, {
					xtype : 'VersionHumanResourceGridField',
					title : '版本人力',
					name : 'humainResources',
					submitFields : ['id', 'ratio', 'startDate', 'endDate',
							'description', 'employee.id', 'activityType']
				}]
			}],
	initMonthHumanResourcePlan : function() {
		var st = this.down('datefield[name="startDate"]').getValue()
		var et = this.down('datefield[name="plannedEndDate"]').getValue()
		if (Ext.isEmpty(st) || Ext.isEmpty(et)) {
			return;
		}

		var monthHumanResourcePlans = this
				.down('MonthHumanResourcePlanGridField');
		var records = monthHumanResourcePlans.getRecords();
		var tst = st;
		while (true) {
			var i = Ext.Number.from(Ext.Date.format(tst, 'Ym'), -1);
			if (i == -1) {
				break;
			}
			var finded = Ext.Array.findBy(records, function(item) {
						if (item.get('month') == i) {
							return item;
						}
					});
			if (Ext.isEmpty(finded)) {
				var rec = Ext.create(
						'App.vm.version.model.MonthHumanResourcePlanModel', {
							month : i
						});
				records.push(rec)
			}
			tst = Ext.Date.add(tst, Ext.Date.MONTH, 1);

			var ist = Ext.Number.from(Ext.Date.format(tst, 'Ym'), -1);
			var iet = Ext.Number.from(Ext.Date.format(et, 'Ym'), -1);
			if (ist == -1 || iet == -1) {
				break;
			}
			if (ist > iet) {
				break;
			}
		}
		var ist = Ext.Number.from(Ext.Date.format(st, 'Ym'), -1);
		var iet = Ext.Number.from(Ext.Date.format(et, 'Ym'), -1);
		if (records.length != iet - ist + 1) {
			var tmp = [];
			for (var i = 0; i < records.length; i++) {
				var rec = records[i];
				if (rec.get('month') < ist || rec.get('month') > iet) {
					tmp.push(rec);
				}
			}
			Ext.Array.each(tmp, function(rec) {
						Ext.Array.remove(records, rec);
					})
		}
		Ext.Array.sort(records, function(a, b) {
					if (a.get('month') > b.get('month')) {
						return 1;
					} else if (a.get('month') == b.get('month')) {
						return -1;
					}
					return 0;
				})
		monthHumanResourcePlans.loadRecords(records, false);
	},
	isValid : function() {
		var valid = this.callParent(arguments);
		if (valid == false) {
			return false;
		}
		var list = this.down('MonthHumanResourcePlanGridField').getRecords();
		if (list.length <= 0) {
			Extend.Msg.error('错误', '人力预算为必填字段，不允许为空！');
			return false;
		}
		for (var i = 0; i < list.length; i++) {
			if (Ext.isEmpty(list[i].get('plannedHumanResources'))) {
				Extend.Msg.error('错误', '人力预算部份“计划人力”未填写，不允许为空！');
				return false;
			}
		}

		list = this.down('VersionHumanResourceGridField').getRecords();
		if (list.length <= 0) {
			Extend.Msg.error('错误', '版本人力为必填字段，不允许为空！');
			return false;
		}

		var records = this.down('MonthHumanResourcePlanGridField').getRecords();
		var activityTypes = [];
		Ext.Array.each(records, function(item) {
					var activityHumanResourcePlans = item
							.get('activityHumanResourcePlans');

					if (!Ext.isEmpty(activityHumanResourcePlans)) {
						Ext.Array.each(activityHumanResourcePlans, function(
										ahrp) {
									var at = ahrp.activityType;

									if (!Ext.isEmpty(at)) {
										activityTypes.push(at);
									}
								})
					}
				})
		for (var i = 0; i < list.length; i++) {
			var record = list[i];
			var at = record.get('activityType');
			if (!Ext.Array.contains(activityTypes, at)) {
				Extend.Msg.error('错误', '版本人力中活动类型“' + at + '”在人力预算中不存在！');
				return false;
			}
		};
		return true;
	}
})
