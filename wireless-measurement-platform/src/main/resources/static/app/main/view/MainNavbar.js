Ext.define('App.main.view.MainNavbar', {
    extend: 'Extend.navbar.Navbar',
    alias: ['widget.MainNavbar'],
    height: 56,
    backgroundColor: '#444',
    itemWidth: '100px',
    menus: [
        {
            icon: '/css/icons/logo.png',
            logo: true,
            href: '/',
            style: {
                width: '128px',
                marginLeft: '5px',
                marginRight: '10px'
            }
        },
        {
            name: '项目度量',
            style: {
                width: '100px'
            },
            actived: true
        },
        {
            name: '版本度量'
        }
    ], listeners: {
        afterrender: function () {
            this.createLeftButtons();
        }
    },
    createLeftButtons: function () {
        var spec = {
            id: 'buttons-ul',
            tag: 'ul',
            cls: 'buttons-ul',
            // append children after creating
            children: [
                {
                    tag: 'li', cls: 'po-config', title: '项目订单',
                    children: [
                        {tag: 'a', cls: 'icon', href: "/?po", target: "_blank"}
                    ]
                },
                {
                    tag: 'li', cls: 'qa-config', title: '项目质量',
                    children: [
                        {tag: 'a', cls: 'icon', href: "/?qa", target: "_blank"}
                    ]
                },
                {
                    tag: 'li', cls: 'pm-config', title: '项目管理',
                    children: [
                        {tag: 'a', cls: 'icon', href: "/?pm", target: "_blank"}
                    ]
                },
                {
                    tag: 'li', cls: 'admin-config', title: '系统配置',
                    children: [
                        {tag: 'a', cls: 'icon', href: "/?administrator", target: "_blank"}
                    ]
                },
                {
                    tag: 'li', cls: 'logout', title: '注销',
                    children: [
                        {tag: 'a', cls: 'icon', href: "/logout"}
                    ]
                }
            ]
        };
        var buttons = Ext.dom.Helper.append(
            this.body, // the context element 'my-div' can either be the id or the actual node
            spec,
            true    // the specification object
        )
    }

})