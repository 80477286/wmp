Ext.define('App.management.po.controller.ViewportController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ViewportController',
    control: {
        'Viewport': {
            itemclick: 'onMenuClick',
            afterrender: 'onMenuAfterRender'
        }
    },
    onMenuAfterRender: function (mv) {
        var menuActived = Ext.util.Cookies.get('_pm_navbar_actived');
        if (!Ext.isEmpty(menuActived)) {
            {
                var menu = mv.items.get(menuActived)
                menu.active();
            }
        }
    },
    onMenuClick: function (ne, menu) {
        // var mainFrame = this.getView().down('MainFrame');
        // var clazz = 'App.metric.project.view.ProjectMetricView';
        // if (menu.name == '版本度量') {
        //     clazz = 'App.metric.version.view.VersionMetricView';
        // }
        // var id = clazz.replace(/\./g, '_') + '_' + Ext.util.Base64.encode(menu.name);
        // var cmp = mainFrame.queryById(id);
        // if (Ext.isEmpty(cmp)) {
        //     var view = Ext.create(clazz, {id: id});
        //     mainFrame.add(view);
        // }
        // mainFrame.setActiveItem(id);
        // Ext.util.Cookies.set('_menu_actived', menu.name);
    }
})
;