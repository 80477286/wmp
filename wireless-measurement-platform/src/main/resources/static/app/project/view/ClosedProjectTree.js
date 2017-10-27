Ext.define('App.po.project.view.ClosedProjectTree', {
			extend : 'App.pm.project.view.BaseProjectTree',
			alias : 'widget.ClosedProjectTree',
			requires : ['App.pm.project.model.ProjectNode'],
			columns : [{
						xtype : 'treecolumn',
						text : '名称',
						dataIndex : 'name'
					}, {
						text : '项目经理',
						renderer : function(v, m, r) {
							if (!Ext.isEmpty(r.get('employee'))) {
								return r.get('employee').name
							}
						}
					}, {
						xtype : 'YmdColumn',
						header : '项目立项时间',
						dataIndex : 'establishDate'
					}, {
						xtype : 'YmdColumn',
						header : '计划结项时间',
						dataIndex : 'scheduledEndDate'
					}],
			store : {
				autoLoad : false,
				model : 'App.pm.project.model.ProjectNode',
				nodeParam : "id",
				root : {
					name : '项目管理',
					expanded : false,
					level : 0,
					id : 'root'
				},
				sorters : [{
							property : 'index',
							direction : 'desc'
						}],
				proxy : {
					type : 'ajax',
					url : 'commons/domain/get_children',
					idParam : 'id',
					extraParams : {
						actived : false
					},
					reader : {
						type : 'json',
						rootProperty : 'data'
					}
				}
			}
		})