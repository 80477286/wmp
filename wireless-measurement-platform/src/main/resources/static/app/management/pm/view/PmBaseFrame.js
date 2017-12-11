Ext.define('App.management.pm.view.ProjectInfoPanel', {
    extend: 'Ext.Component',
    alias: ['widget.ProjectInfoPanel'],
    baseCls: 'ProjectInfo',//基础样式类
    tpl: [
        '  <div  style="color: #fff;position: absolute;bottom: 10px;right: 10px;cursor: pointer;" id="{id}-pi" data-ref="pi">',
        '     <span>当前项目：</span>',
        '     <tpl if="project">',
        '     <span>{project.name}</span>',
        '     <tpl else>',
        '     <span>无可管理项目</span>',
        '     </tpl>',
        '  </div>'],
    initEvents: function () {
        var pi = this.getEl().selectNode('div[data-ref="pi"]', false);
        pi.on({
            click: function (e, t, eOpts) {
                var view = this;
                view.showProjectSelectionWindow(function () {

                });
            },
            scope: this
        });
        console.log(this.q1)
    },
    initRenderData: function () {
        this.setData({project: app.project});
        return this.callParent(arguments);
    },
    showProjectSelectionWindow: function (callback) {
        Ext.create({
            xtype: 'ProjectSelectionWindow',
            owner: this
        }).show();
    }
})
Ext.define('App.management.pm.view.ProjectSelectionWindow', {
    extend: 'Ext.window.Window',
    alias: ['widget.ProjectSelectionWindow'],
    width: 500,
    height: 250,
    modal: true,
    layout: 'column', defaults: {columnWidth: 1, margin: 5},
    buttons: [{
        text: '确定',
        handler: function () {
            this.up('window').selectionProject();
        }
    }, {
        text: '取消',
        handler: function () {
            this.up('window').close();
        }
    }],
    items: [{
        xtype: 'panel',
        html: '<span style="color:crimson;">注：如果您存在多个项目需要管理，请先选择需要管理的项目，“确定”后在项目管理页面所有的操作将会针对此项目！</span>',
    }, {
        fieldLabel: '选择项目',
        xtype: 'combobox',
        labelAlign: 'top',
        editable: false,
        queryMode: 'local',
        valueField: 'id',
        displayField: 'name',
        store: {
            autoLoad: true,
            fields: ['id', 'name'],
            pageSize: 9999,
            remoteSort: true,
            sorters: [{
                property: 'name',
                direction: 'asc'
            }],
            proxy: {
                params: {},
                type: 'majax',
                url: '/project/query',
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: 'total'
                }
            }
        }
    }],
    listeners: {
        afterrender: function () {
            this.down('combobox').setValue(app.project.id)
        }
    },
    selectionProject: function () {
        var me = this;
        var id = this.down('combobox').getValue();
        me.mask('切换...');
        Ext.Ajax.request({
            url: '/set_user_current_project',
            params: {id: id},
            success: function (resp) {
                if (resp.result.success == true) {
                    Ext.Msg.alert('提示', '您当前管理项目已经切换到“' + resp.result.data.name+'”，系统将重新加载数据。', function () {
                        window.location.reload()
                    });
                } else {
                    me.unmask();
                }
            },
            callback: function () {
                // me.unmask();
            }
        });
    }
})
;

Ext.define('App.management.pm.view.PmBaseFrame', {
    extend: 'App.commons.tab.BaseFrame',
    alias: ['widget.PmBaseFrame'],
    layout: 'border',
    requires: [],
    items: [{
        xtype: 'ProjectInfoPanel',
        height: 66,
        region: 'north',
        bodyStyle: 'background-color:#333;'
    }]
})