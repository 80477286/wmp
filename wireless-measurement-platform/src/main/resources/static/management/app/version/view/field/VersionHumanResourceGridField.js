Ext.define('App.version.view.field.VersionHumanResourceGridField', {
	extend : 'Extend.form.field.GridField',
	alias : 'widget.VersionHumanResourceGridField',
	requires : ['App.version.model.VersionHumanResourceModel'],
	model : 'App.version.model.VersionHumanResourceModel',
	roweditable : true,
	columns : [{
				text : 'ID',
				dataIndex : 'id',
				hidden : true,
				sortable : false
			}, {
				text : '姓名',
				dataIndex : 'id',
				renderer : function(v, m, r) {
					return r.get('employee').name;
				}
			}, {
				text : '身份证',
				dataIndex : 'id',
				renderer : function(v, m, r) {
					return r.get('employee').idNumber;
				}
			}, {
				text : '工号',
				dataIndex : 'id',
				renderer : function(v, m, r) {
					return r.get('employee').chinasoftNumber;
				}
			}, {
				text : '投入占比',
				dataIndex : 'ratio',
				editor : {
					xtype : 'numberfield',
					allowBlank : false,
					decimalPrecision : 4,
					minValue : 0.0001,
					blankText : '投入占比为必填字段，不能为空！'
				}
			}, {
				xtype : 'ymdcolumn',
				text : '开始投入时间',
				dataIndex : 'startDate',
				editor : {
					xtype : 'YmdDateField',
					allowBlank : false,
					editable : false,
					blankText : '开始投入时间为必填字段，不能为空！'
				}
			}, {
				xtype : 'ymdcolumn',
				text : '结束投入时间',
				dataIndex : 'endDate',
				editor : {
					xtype : 'YmdDateField',
					editable : false,
					allowBlank : false,
					blankText : '结束投入时间为必填字段，不能为空！'
				}
			}, {
				text : '活动类型',
				dataIndex : 'activityType',
				editor : {
					xtype : 'combobox',
					editable : false,
					itemId : 'activityType',
					queryMode : 'local',
					displayField : 'name',
					valueField : 'name',
					allowBlank : false,
					blankText : '活动类型为必填字段，不能为空！',
					store : {
						fields : ['name'],
						data : []
					}
				}
			}, {
				text : '描述',
				dataIndex : 'description',
				editor : {
					xtype : 'textfield'
				}
			}],
	listeners : {
		beforeedit : function(plugin, context, eOpts) {
			var activityType = plugin.editor
					.down('combobox[itemId="activityType"]')
			var records = this.up('tabpanel')
					.down('MonthHumanResourcePlanGridField').getRecords();
			var datas = [];
			var list = [];
			Ext.Array.each(records, function(item) {
						var activityHumanResourcePlans = item
								.get('activityHumanResourcePlans');

						if (!Ext.isEmpty(activityHumanResourcePlans)) {
							Ext.Array.each(activityHumanResourcePlans,
									function(ahrp) {
										var at = ahrp.activityType;

										if (!Ext.isEmpty(at)) {
											if (!Ext.Array.contains(list, at)) {
												list.push(at);
												datas.push({
															name : at
														});
											}
										}
									})
						}
					})
			activityType.getStore().loadData(datas, false);
		}
	},
	addHandler : function() {
		var grid = this;
		Ext.create('Extend.window.SelectionWindow', {
			height : 500,
			grid : 'App.hrm.employee.view.EmployeeSelection',
			listeners : {
				selected : function(rs) {
					var datas = [];
					Ext.Array.each(rs, function(r) {
						var data = Ext
								.create(
										'App.version.model.VersionHumanResourceModel',
										{
											employee : r.data
										});
						datas.push(data);
					})
					grid.loadRecords(datas, true);
				}
			}
		}).show();
	}
});