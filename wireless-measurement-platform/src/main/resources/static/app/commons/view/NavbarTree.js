Ext.define('App.commons.view.NavbarTree', {
    extend: 'Ext.tree.Panel',
    alias: ['widget.NavbarTree'],
    bodyStyle: 'padding:0 5px 5px 0;',
    style: {backgroundColor: '#000'},
    store: {
        xtype: 'treestore',
        root: {
            expanded: true,
            rootVisible: false,
            iconCls: 'icon-page-last',
            text: ''
        }
    }, listeners: {
        afterrender: function () {
            this.getStore().setRoot({
                expanded: true,
                rootVisible: false,
                iconCls: 'icon-page-last',
                text: '',
                children: [
                    {
                        text: 'IT产品线--DU1',
                        expanded: true,
                        iconCls: 'icon-bu',
                        children: [
                            {
                                text: '存储--BU',
                                expanded: true,
                                iconCls: 'icon-du',
                                children: [{
                                    text: '统一存储--PDU',
                                    expanded: true,
                                    iconCls: 'icon-pdu',
                                    children: [
                                        {
                                            text: 'POMARP自动化工厂委托开发项目2期工厂委',
                                            iconCls: 'icon-po',
                                            expanded: true,
                                            children: [{
                                                iconCls: 'icon-project',
                                                text: 'MARP自动化测试五期',
                                                leaf: true
                                            }, {
                                                iconCls: 'icon-project',
                                                text: 'MARP自动化工厂委托开发项目2期工厂委托开发项目2期',
                                                leaf: true
                                            }]
                                        }
                                    ]
                                }, {
                                    text: '存储云服务--PDU',
                                    expanded: true,
                                    iconCls: 'icon-pdu',
                                    children: [
                                        {
                                            text: 'PO',
                                            iconCls: 'icon-po',
                                            expanded: true,
                                            children: [{
                                                iconCls: 'icon-project',
                                                text: 'MARP自动化测试五期',
                                                leaf: true
                                            }, {
                                                iconCls: 'icon-project',
                                                text: 'MARP自动化工厂委托开发项目2期',
                                                leaf: true
                                            }]
                                        }
                                    ]
                                }, {
                                    text: '海量存储--PDU',
                                    expanded: true,
                                    iconCls: 'icon-pdu',
                                    children: [
                                        {
                                            text: 'PO',
                                            iconCls: 'icon-po',
                                            expanded: true,
                                            children: [{
                                                iconCls: 'icon-project',
                                                text: 'MARP自动化测试五期',
                                                leaf: true
                                            }, {
                                                iconCls: 'icon-project',
                                                text: 'MARP自动化工厂委托开发项目2期',
                                                leaf: true
                                            }]
                                        }
                                    ]
                                }]
                            },
                            {
                                text: '服务器 --- BU',
                                expanded: true,
                                iconCls: 'icon-du',
                                children: [{
                                    text: '统一存储--PDU',
                                    expanded: true,
                                    iconCls: 'icon-pdu',
                                    children: [
                                        {
                                            text: 'PO',
                                            iconCls: 'icon-po',
                                            expanded: true,
                                            children: [{
                                                iconCls: 'icon-project',
                                                text: 'MARP自动化测试五期',
                                                leaf: true
                                            }, {
                                                iconCls: 'icon-project',
                                                text: 'MARP自动化工厂委托开发项目2期',
                                                leaf: true
                                            }]
                                        }
                                    ]
                                }]
                            }
                        ]
                    },
                    {
                        text: 'IT产品线--DU',
                        expanded: false,
                        iconCls: 'icon-bu',
                        children: [
                            {
                                text: '存储--DU',
                                expanded: true,
                                children: [{
                                    text: '统一存储--PDU',
                                    expanded: true,
                                    children: [
                                        {
                                            text: 'PO',
                                            iconCls: 'icon-po',
                                            expanded: true,
                                            children: [{
                                                text: 'MARP自动化测试五期',
                                                iconCls: 'icon-project',
                                                leaf: true
                                            }, {
                                                text: 'MARP自动化工厂委托开发项目2期',
                                                iconCls: 'icon-project',
                                                leaf: true
                                            }]
                                        }
                                    ]
                                }]
                            },
                            {
                                text: 'algebra',
                                leaf: true
                            }
                        ]
                    },
                    {
                        text: 'IT产品线--DU',
                        iconCls: 'icon-bu',
                        expanded: false,
                        children: [
                            {
                                text: '存储--DU',
                                expanded: true,
                                children: [{
                                    text: '统一存储--PDU',
                                    expanded: true,
                                    children: [
                                        {
                                            text: 'PO',
                                            expanded: true,
                                            children: [{
                                                text: 'MARP自动化测试五期',
                                                leaf: true
                                            }, {
                                                text: 'MARP自动化工厂委托开发项目2期',
                                                leaf: true
                                            }]
                                        }
                                    ]
                                }]
                            },
                            {
                                text: 'algebra',
                                leaf: true
                            }
                        ]
                    }]
            })
        }
    }
})