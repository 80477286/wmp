Ext.define('App.hrm.employee.field.EmployeeComboBox', {
			extend : 'Ext.form.field.ComboBox',
			alias : 'widget.EmployeeComboBox',
			displayField : 'name',
			valueField : 'id',
			editable : false,
			multiSelect : false,
			initComponent : function() {
				this.store = {
					fields : ['id', 'name','huaweiNumber','huaweiNumber'],
					pageSize : 999,
					proxy : {
						type : 'ajax',
						url : 'hrm/employee/query',
						reader : {
							type : 'json',
							rootProperty : 'data'
						}
					},
					autoLoad : true
				}
				if (!Ext.isEmpty(this.extraParams)) {
					this.store.proxy.extraParams = this.extraParams;
				}
				this.callParent(arguments);
			}

		})