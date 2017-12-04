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
        var mainFrame = this.getView().down('MainFrame');
        var clazz = 'App.metric.project.view.ProjectMetricView';
        var en = 'pmetric';
        if (menu.name == '版本度量') {
            var en = 'vmetric';
            clazz = 'App.metric.version.view.VersionMetricView';
        } else if (menu.name == '人力信息') {
            clazz = 'App.hrm.employee.view.EmployeeInfoView';
            var en = 'einfo';
        } else if (menu.name == '项目信息') {
            clazz = 'App.project.view.ProjectInfoView';
            var en = 'pinfo';
        }
        var id = clazz.replace(/\./g, '_') + '_' + en;
        var cmp = mainFrame.queryById(id);
        if (Ext.isEmpty(cmp)) {
            var view = Ext.create(clazz, {id: id});
            mainFrame.add(view);
        }
        mainFrame.setActiveItem(id);
        Ext.util.Cookies.set('_menu_actived', menu.name);
    }
})
;