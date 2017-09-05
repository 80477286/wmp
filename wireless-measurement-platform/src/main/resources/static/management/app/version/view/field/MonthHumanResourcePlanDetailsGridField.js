Ext.define('App.version.view.field.MonthHumanResourcePlanDetailsGridField',
		{
			extend : 'Extend.form.field.GridField',
			alias : 'widget.MonthHumanResourcePlanDetailsGridField',
			requires : ['App.version.model.ActivityHumanResourcePlanModel'],
			model : 'App.version.model.ActivityHumanResourcePlanModel',
			submitValue : false,
			roweditable : true,
			columns : [{
						text : '活动类型',
						dataIndex : 'activityType',
						editor : {
							xtype : 'textfield',
							allowBlank : false,
							blankText : '活动类型为必填字段，不能为空！'
						}
					}, {
						text : '计划人力',
						dataIndex : 'plannedHumanResources',
						editor : {
							xtype : 'textfield',
							allowBlank : false,
							blankText : '计划人力为必填字段，不能为空！'
						}
					}],
			initEvents : function() {
				var me = this;
				me.on({
							edit : function(editor, e) {
								if (me.isValid() == true) {
									me.fireEvent('datachange', me, me
													.getDatas());
								} else {
									me.findPlugin('rowediting').startEdit(
											e.record, 1);
								}
							}
						});
				me.callParent(arguments);
			},
			isValid : function() {
				var valid = this.callParent(arguments);
				if (valid == false) {
					return false;
				}
				var store = this.getStore();
				var types = [];
				for (var i = 0; i < store.getCount(); i++) {
					var item = store.getAt(i);
					var at = item.get('activityType');
					if (Ext.Array.contains(types, at)) {
						Extend.Msg
								.error('错误', '活动类型“' + at + '”在计划中已经存在，不能重复！');
						return false;
					} else {
						types.push(at);
					}
				}
				return true;
			},
			deleteHandler : function(ids, messages) {
				this.callParent(arguments);
				this.fireEvent('dataremove', ids);
			}
		});