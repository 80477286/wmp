Ext.define('App.project.view.ActivedProjectTree', {
	extend : 'App.project.view.BaseProjectTree',
	alias : 'widget.ActivedProjectTree',
	requires : ['App.project.model.ProjectNode'],
	config : {
		tbar : {
			add : {
				text : '添加',
				iconCls : 'add',
				handler : function() {
					var me = this.up('treepanel');
					var records = me.getSelection();
					if (records.length > 0) {
						me.editHandler.call(me, me, records[0], null);
					} else {
						Extend.Msg.error('错误', '操作失败，请先选择要添加的节点！')
					}
				}
			},
			edit : {
				text : '编辑',
				iconCls : 'edit',
				handler : function() {
					var me = this.up('treepanel');
					var records = me.getSelection();
					if (records.length > 0) {
						me.editHandler.call(me, me, null, records[0]);
					} else {
						Extend.Msg.error('错误', '操作失败，请先选择要编辑的节点！')
					}
				}
			},
			remove : {
				text : '删除',
				iconCls : 'remove',
				handler : function() {
					var me = this.up('treepanel');
					var records = me.getSelection();
					if (records.length > 0) {
						if (records[0].get('level') == 0) {
							Extend.Msg.error('错误', '操作失败，不允许删除根节点！')
						} else {
							me.deleteHandler.call(me, me, records[0]);
						}
					} else {
						Extend.Msg.error('错误', '操作失败，请先选择要删除的节点！')
					}
				}
			},
			exportProject : {
				text : '导出',
				iconCls : 'export',
				handler : function() {
					var view = this.up('ActivedProjectTree');
					view.exportProjectHandler.call(view)
				}
			}
		}
	},
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
				header : '立项时间',
				dataIndex : 'startDate'
			}, {
				xtype : 'YmdColumn',
				header : '计划结项时间',
				dataIndex : 'plannedEndDate'
			}],
	listeners : {
		itemdblclick : function($this, record) {
			this.editHandler.call($this.up('treepanel'), $this.up('treepanel'),
					null, record);
		}
	},
	createtmenu : function($this, td, cellIndex, record, tr, rowIndex, e, eOpts) {
		var me = this;
		if (cellIndex == 0) {
			var menu = Ext.create('Ext.menu.Menu', {
						items : [{
									text : '刷新',
									iconCls : 'refresh',
									disabled : Ext.isEmpty(record.get('level')),
									handler : function() {
										me.mask('刷新...');
										me.reloadNode(record);
									}
								}, {
									text : '展开',
									iconCls : 'refresh',
									disabled : Ext.isEmpty(record.get('level')),
									handler : function() {
										me.expandNode(record, false);
									}
								}, {
									text : '全展开',
									iconCls : 'refresh',
									disabled : Ext.isEmpty(record.get('level')),
									handler : function() {
										me.expandNode(record, true);
									}
								}, {
									text : '添加',
									iconCls : 'add',
									disabled : Ext.isEmpty(record.get('level')),
									handler : function() {
										me.editHandler.call(me, me, record,
												null);
									}
								}, {
									text : '编辑',
									iconCls : 'add',
									disabled : record.get('level') == 0,
									handler : function() {
										me.editHandler.call(me, me, null,
												record);
									}
								}, {
									text : '删除',
									iconCls : 'delete',
									disabled : record.get('level') == 0,
									handler : function() {
										me.deleteHandler.call(me, me, record,
												null);
									}
								}]
					});
			e.preventDefault();
			e.stopEvent();// 这两个很重要，否则点击鼠标右键还是会出现浏览器的选项

			menu.showAt(e.getXY());
		}
	},
	deleteHandler : function(me, node) {
		var url = "commons/domain/delete";
		if (Ext.isEmpty(node.get('level'))) {
			var url = "pm/project/delete";
		}
		me.mask('删除...')
		Ext.Ajax.request({
					url : url,
					params : {
						ids : [node.get('id')]
					},
					success : function(resp) {
						if (resp.result.success == true) {
							node.remove();
						} else {
							Extend.Msg.error('错误', resp.result.error)
						}
					},
					callback : function() {
						me.unmask();
					}
				});
	},
	editHandler : function(me, parent, node) {
		var clazz = 'App.po.project.view.ProjectEditorWindow';
		var url = 'pm/project/save';
		if (!Ext.isEmpty(parent)) {
			node = {
				parent : {
					id : parent.get('id') == 'root' ? '' : parent.get('id')
				},
				status : 1
			}
			if (parent.get('level') == 0 || parent.get('level') == 1) {
				clazz = 'App.commons.domain.view.DomainEditor';
				url = 'commons/domain/save';
				node.level = parent.get('level') + 1
			}

			Ext.create(clazz, {
						url : url,
						listeners : {
							save : function() {
								me.reloadNode(parent);
							}
						}
					}).show().loadRecord(node);
		} else {
			if (node.get('level') == 0) {
				return;
			}
			var getUrl = 'pm/project/get_by_id';
			parent = node.parentNode;
			if (parent.get('level') == 0 || parent.get('level') == 1) {
				clazz = 'App.commons.domain.view.DomainEditor';
				url = 'commons/domain/save';
				node.level = parent.get('level') + 1
				getUrl = "commons/domain/get_by_id";
			} 
			Ext.create(clazz, {
						url : url,
						model : 'App.pm.project.model.ProjectModel',
						listeners : {
							save : function() {
								me.reloadNode(node);
							}
						}
					}).show().load({
						url : getUrl,
						params : {
							id : node.get('id')
						}
					});
		}
	},
	moveHandler : function(sid, tid, isProject, callback) {
		Ext.Ajax.request({
					url : 'commons/domain/move',
					params : {
						sid : sid,
						tid : tid,
						project : isProject
					},
					success : function(resp) {
						callback(resp.result.success);
					},
					failure : function() {
						callback(false);
					}
				});
	},
	viewConfig : {
		plugins : {
			ptype : 'treeviewdragdrop',
			dragText : '请拖拽目标到指定的节点。',
			displayField : 'name'
		},
		listeners : {
			beforedrop : function(node, data, overModel, dropPosition,
					dropHandlers) {
				var me = this;
				dropHandlers.wait = true;
				var dropTarget = dropPosition == 'append'
						? overModel
						: overModel.parentNode;
				var src = data.records[0];
				if ((Ext.isEmpty(src.get('level')) && dropTarget.get('level') != 2)
						|| Ext.isEmpty(dropTarget.get('level'))
						|| (!Ext.isEmpty(src.get('level')) && dropTarget
								.get('level') != 1)) {
					dropHandlers.cancelDrop();
					return;
				}
				var msg = '你确定要将“' + data.records[0].get('name') + '”移动到“'
						+ overModel.get('name') + '”';
				if (dropPosition == 'append') {
					msg += "中吗？";
				} else if (dropPosition == 'before') {
					msg += "前吗？";
				} else {
					msg += "后吗？";
				}
				Ext.MessageBox.confirm('Drop', msg, function(btn) {
							if (btn === 'yes') {
								var tree = me.up('treepanel')
								tree.moveHandler(src.get('id'), dropTarget
												.get('id'), Ext.isEmpty(src
												.get('level')), function(
												success) {
											if (success == true) {
												dropHandlers.processDrop();
											} else {
												dropHandlers.cancelDrop();
											}
										});

							} else {
								dropHandlers.cancelDrop();
							}
						});
			}
		}
	},
	exportProjectHandler : function() {
		var win = Ext.create("Extend.window.ExportWindow", {
					title : "打散规则导出",
					height : 200,
					subscribes : ['project.export.progress#' + app.localhost, {
								subscribe : 'project.export.message#'
										+ app.localhost,
								callback : function(content) {
									win.down('button[action="ok"]').enable();
									win.down('button[action="close"]').enable();
									Extend.Msg.error('错误', content.data);
								}
							}],
					url : 'pm/project/export',
					listeners : {
						error : function(content) {
							win.down('button[action="ok"]').enable();
							win.down('button[action="close"]').enable();
							Extend.Msg.error('错误', content.data,
									content.messages, content.errors,
									content.exception)
						}
					}
				});
		win.show();
	}
})