Ext.define('App.project.model.ProjectNode', {
			extend : 'Ext.data.TreeModel',
			fields : [{
						name : 'name'
					}, {
						name : 'iconCls',
						convert : function(v, r) {
							var iconCls = 'Project';
							if (r.get('level') == 1) {
								iconCls = 'Folder';
							} else if (r.get('level') == 2) {
								iconCls = 'Folder1';
							} else if (r.get('level') == 0) {
								iconCls = 'BaselineVersion';
							}
							return iconCls
						}
					}, {
						name : 'leaf',
						convert : function(v, r) {

							if (Ext.isEmpty(r.get('level'))) {
								return true;
							}
							return false
						}
					}],
			proxy : {
				type : 'ajax',
				url : 'commons/domain/get_by_id',
				idParam : 'id',
				reader : {
					rootProperty : 'data',
					totalProperty : 'total'
				}
			}
		});
