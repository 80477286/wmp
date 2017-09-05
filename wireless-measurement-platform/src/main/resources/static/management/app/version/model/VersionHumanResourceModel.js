Ext.define('App.version.model.VersionHumanResourceModel', {
			extend : 'Extend.data.BaseModel',
			fields : [{
						name : 'startDate',
						type : 'date'
					}, {
						name : 'endDate',
						type : 'date'
					}, {
						name : 'ratio',
						type : 'float'
					}, {
						name : 'activityType',
						type : 'string'
					}, {
						name : 'description',
						type : 'string'
					}]
		});
