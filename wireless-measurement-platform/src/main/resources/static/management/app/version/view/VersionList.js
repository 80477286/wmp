Ext.define('App.version.view.VersionList', {
	extend : 'Extend.grid.CrudGridPanel',
	alias : 'widget.VersionList',
	requires : ['App.version.viewmodel.VersionViewModel',
			'App.version.model.VersionModel'],
	viewModel : 'VersionViewModel',
	bind : {
		store : '{Query}',
		columns : '{columns}',
		search : '{search}'
	},
	config : {
		tbar : {
			quickCreate : {
				hidden : true
			}
		}
	},
	editor : {
		formClazz : 'App.version.view.VersionEditor',
		save : '/version/save',
		remove : '/version/delete',
		get : '/version/get_by_id',
		model : 'App.version.model.VersionModel'
	},
	plugins : [{
		ptype : 'rowexpander',
		expandOnDblClick : false,
		rowBodyTpl : new Ext.XTemplate(
				'<style type="text/css">.table_info {background:#FFF;width:"100%";margin-right:20px;margin-left:10px;border-top: 1px solid #666;border-left: 1px solid #666;}'
						+ '.table_info tr td {width:80px;height:25px;border-right: 1px solid #666;border-bottom: 1px solid #666;padding:3px;} '
						+ '</style>',
				'<table  border="0" cellpadding="0" cellspacing="0" class="table_info">',
				'<tr>',
				'     <td rowspan="3" style="width:150px;background:#CCC;">项目总预算:{totalWorkloads}</td>',
				'     <tpl for="monthHumanResourcePlans"><td colspan="2" style="background:#CCC;">{month}</td></tpl>',
				'</tr>',
				'<tr>',
				'     <tpl for="monthHumanResourcePlans"><td colspan="2">{plannedHumanResources}</td></tpl>',
				'</tr>',
				'<tr>',
				'     <tpl for="monthHumanResourcePlans"><td  style="background:#CCC;">计划值</td><td style="background:#CCC;">实名分配</td></tpl>',
				'</tr>',
				'     <tpl for="this.summary(monthHumanResourcePlans,humainResources)">',
				'        <tr>', '           <td  style="background:#CCC;">{title}</td>',
				'           <tpl for="datas"><td>{pd}</td><td>{ad}</td></tpl>',
				'        </tr>', '     </tpl>', '</table>', {
					summary : function(monthHumanResourcePlans, humainResources) {
						var list = [{
									title : '汇总',
									datas : []
								}];
						for (var i = 0; i < monthHumanResourcePlans.length; i++) {
							var mhrp = monthHumanResourcePlans[i];
							for (var j = 0; j < mhrp.activityHumanResourcePlans.length; j++) {
								var ahrp = mhrp.activityHumanResourcePlans[j];

								var item = Ext.Array.findBy(list,
										function(item) {
											if (item.title == ahrp.activityType) {
												return item;
											}
										});
								if (Ext.isEmpty(item)) {
									item = {
										title : ahrp.activityType,
										datas : []
									};
									for (var k = 0; k < monthHumanResourcePlans.length; k++) {
										item.datas.push({
													pd : '-',
													ad : '-'
												})
									}
									item.datas[i] = {
										pd : ahrp.plannedHumanResources,
										ad : ahrp.actualHumanResources
									}
									list.push(item);
								} else {
									if (item.datas[i].pd == '-') {
										item.datas[i] = {
											pd : 0,
											ad : 0
										};
									}
									item.datas[i].pd += ahrp.plannedHumanResources;
									item.datas[i].ad += ahrp.actualHumanResources;
								}
							};
						}
						Ext.Array.each(monthHumanResourcePlans, function(mhrp) {
									var summer = Ext.Array.findBy(list,
											function(item) {
												if (item.title == '汇总') {
													return item;
												}
											});
									summer.datas.push({
												pd : mhrp.plannedHumanResources,
												ad : mhrp.actualHumanResources
											});
								});
						return list;
					},
					getTotalHr : function(monthHumanResourcePlans) {
						var total = 0;
						for (var j = 0; j < mhrp.activityHumanResourcePlans.length; j++) {
							var mhrp = monthHumanResourcePlans[i];
							total += mhrp.plannedHumanResources;
						}
						return total;
					}
				})
	}]
});