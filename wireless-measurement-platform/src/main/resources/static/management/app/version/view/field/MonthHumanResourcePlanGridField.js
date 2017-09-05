Ext.define('App.version.view.field.MonthHumanResourcePlanGridField', {
			extend : 'Extend.form.field.GridField',
			alias : 'widget.MonthHumanResourcePlanGridField',
			roweditable : false,
			editable : true,
			listeners : [{
						select : function($this, record) {
							this.editHandler(record);
						}
					}],
			config : {
				tbar : {
					sl : {
						xtype : 'label',
						text : '点击月份查看详细...',
						margin : '4 0 3 0',
						index : -1
					},
					add : {
						hidden : true
					},
					remove : {
						hidden : true
					}
				}
			},
			columns : [{
						text : 'ID',
						dataIndex : 'id',
						hidden : true,
						sortable : false
					}, {
						text : '月份',
						dataIndex : 'month'
					}, {
						text : '计划人力',
						dataIndex : 'plannedHumanResources'
					}],
			addHandler : function() {
				this.editHandler(null);
			},
			editHandler : function(record) {
				var me = this;
				// var win = Ext.create(
				// 'App.vm.version.view.field.MonthHumanResourcePlanEditor', {
				// saveHandler : function() {
				// if (!this.isValid()) {
				// return;
				// }
				// var data = this.getDatas();
				// var index = me.getStore().find('month', data.month);
				// me.getStore().removeAt(index);
				// var rec = Ext
				// .create(
				// 'App.vm.version.model.MonthHumanResourcePlanModel',
				// data);
				// me.insertRecord(index, rec);
				// win.close();
				// }
				// }).show();
				if (Ext.isEmpty(record.get('activityHumanResourcePlans'))) {
					record.set('activityHumanResourcePlans', [])
				}
				if (!Ext.isEmpty(record)) {
					me.fireEvent('editRecord', me, record)
				}
			}
		});