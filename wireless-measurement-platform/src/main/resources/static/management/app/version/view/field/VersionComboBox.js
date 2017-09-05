Ext.define('App.version.view.field.VersionComboBox', {
			extend : 'Ext.form.field.ComboBox',
			alias : 'widget.VersionComboBox',
			displayField : 'name',
			valueField : 'id',
			editable : false,
			multiSelect : false,
			store : {
				fields : ['id', 'name'],
				pageSize : 999,
				proxy : {
					type : 'ajax',
					url : 'version/query_simple',
					reader : {
						type : 'json',
						rootProperty : 'data'
					}
				},
				autoLoad : true
			}
		})