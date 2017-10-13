Ext.Loader.setConfig({
    enabled: true,
    disableCachingParam: 'dc',
    disableCaching: false,
    paths: {// '类名前缀':'所在路径'
        'Extend': '/webjars/extjs/6.2.0/extend',
        'MExt': '/webjars/extjs/6.2.0/extend',
        'Ext.ux': '/webjars/extjs/6.2.0/packages/ux/classic/src'
    }
});
Ext.onReady(function () {
    Ext.create('Ext.Viewport', {
        layout: 'border',
        items: [{
            title:'tree dome',
            xtype: 'treepanel',
            region: 'center',
            store: {
                root: {
                    expanded: true,
                    children: [
                        {
                            text: 'IT产品线--DU',
                            expanded: true,
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
                                    }, {
                                        text: '存储云服务--PDU',
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
                                    }, {
                                        text: '海量存储--PDU',
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
                                    text: '服务器 --- DU',
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
                                }
                            ]
                        },
                        {
                            text: 'IT产品线--DU',
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
                        },
                        {
                            text: 'IT产品线--DU',
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
                        }
                    ]
                }
            },
            rootVisible: false,

        }]
    })
});