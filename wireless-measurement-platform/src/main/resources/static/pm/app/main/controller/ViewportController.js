Ext.define('App.main.controller.ViewportController', {
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
        // if (menu.name == '项目度量') {
        //     var mainFrame = this.getView().down('MainFrame');
        //     var clazz = 'App.metric.project.view.ProjectMetricView';
        //     var id = clazz.replace(/\./g, '_') + '_' + Ext.util.Base64.encode(menu.name);
        //     var oldCmp = mainFrame.queryById(id);
        //     if (!Ext.isEmpty(oldCmp)) {
        //         mainFrame.setActiveItem(id);
        //     } else {
        //         var view = Ext.create(clazz, {id: id});
        //         mainFrame.add(view);
        //     }
        // }
        // console.log(menu);
        // console.log(this.getView());
    }
})
;