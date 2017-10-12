Ext.define('App.main.view.MenuHeader', {
    extend: 'Extend.navbar.Navbar',
    alias: ['widget.MenuHeader'],
    height: 46,
    backgroundColor:'#444',
    menus: [
        {
            icon: '/images/logo5.png',
            logo: true,
            href: '/',
            style: {width: '128px', marginLeft: '5px', marginRight: '10px'}
        },
        {name: '项目总览', href: '/', style: {width: '80px'}, actived: true},
        {
            name: '详细度量',
            handler: function (menu) {
                console.log(this)
            }
        },
        {name: '系统配置', href: '/management', target: '_blank'}
    ],
    title: 'xxx', itemWidth: '100px',
    listeners: {
        itemclick: function (_this, menu) {
            console.log(_this)
        }
    }
})