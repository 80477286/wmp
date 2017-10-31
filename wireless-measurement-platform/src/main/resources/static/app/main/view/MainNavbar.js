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
        },
        {
            name: '配置',
            href: '/management.html',
            target: '_blank'
        }
    ]
})