Ext.define('App.management.pm.controller.ViewportController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ViewportController',
    control: {
        'MainNavbar': {
            itemclick: 'onMenuClick',
            afterrender: 'onMenuAfterRender'
        }
    },
    onMenuAfterRender: function (mv) {
        var menuActived = Ext.util.Cookies.get('_menu_actived');
        if (Ext.isEmpty(menuActived)) {
            var menu = mv.items.get('项目度量')
            menu.active();
            Ext.util.Cookies.set('_menu_actived', menu.menu.name);
        } else {
            var menu = mv.items.get(menuActived)
            menu.active();
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