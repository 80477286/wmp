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

Ext.require(['Extend.navbar.Navbar']);
Ext.onReady(function () {
    Ext.create('Ext.Viewport', {
        layout: 'border',
        items: [
            {
                region: 'north',
                xtype: 'navbar',
                // ui:'black',
                height: 70,
                menus: [
                    {
                        icon: '/images/logo5.png',
                        logo: true,
                        href: '/',
                        style: {width: '131px', marginLeft: '5px', marginRight: '10px'}
                    },
                    {name: '首页', href: '/', style: {width: '80px'}, actived: true},
                    {
                        name: '项目度量',
                        handler: function (menu) {
                            console.log(this)
                        }
                    },
                    {name: 'PO度量'},
                    {name: '系统配置', href: '/management', target: '_blank'}
                ],
                title: 'xxx', itemWidth: '100px',
                listeners: {
                    itemclick: function (_this, menu) {
                        console.log(_this)
                    }
                }
            },
            {
                width: 300,
                region: 'west',
                collapsible: true,
                header: true,
                split: true,
                layout: 'border',
                collapseMode: 'mine',
                items: [{
                    xtype: 'treepanel', region: 'center',
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
            },
            {
                region: 'center',
                layout: 'border',
                items: [{
                    collapsible: true,
                    width: 200,
                    split: true,
                    collapseMode: 'mine',
                    region: 'north',
                    title: 'PO基本信息',
                    bodyStyle: 'background-color:#FFF',
                    html:
                    '<div style="padding:5px;line-height: 25px;">PO名称：XXXXX<br/>' +
                    '开始时间：2017-01-01    ' +
                    '结束时间：2018-01-01<br/>' +
                    '工作量：1520    ' +
                    '已完成工作量：1200</div>'
                },
                    {
                        region: 'center',
                        xtype: 'tabpanel',
                        items: [
                            {
                                title: '项目进展报告',
                                layout: 'vbox',
                                items: [{
                                    xtype: 'gridpanel',
                                    width: '100%',
                                    forceFit: true,
                                    reserveScrollbar: false,// 预留滚动条位置
                                    disableSelection: false,
                                    loadMask: true,
                                    minHeight: 95,
                                    sortableColumns: false,
                                    enableColumnMove: false,
                                    store: Ext.create('Ext.data.ArrayStore', {
                                        fields: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'],
                                        data: [['一', '2017/01/01', '2017/01/30', '1', '40', '10', '5', '15', '12'],
                                            ['二', '2017/01/01', '2017/01/30', '1', '40', '10', '5', '15', '12'],
                                            ['三', '2017/02/01', '2017/02/30', '1', '40', '10', '5', '15', '12'],
                                            ['四', '2017/03/01', '2017/03/30', '1', '40', '10', '5', '15', '12'],
                                            ['五', '2017/04/01', '2017/04/30', '1', '40', '10', '5', '15', '12'],
                                            ['六', '2017/05/01', '2017/05/30', '1', '40', '10', '5', '15', '12'],
                                            ['七', '2017/06/01', '2017/06/30', '1', '40', '10', '5', '15', '12'],
                                            ['八', '2017/07/01', '2017/07/30', '1', '40', '10', '5', '15', '12'],
                                            ['九', '2017/08/01', '2017/08/30', '1', '40', '10', '5', '15', '12'],
                                            ['十', '2017/09/01', '2017/09/30', '1', '40', '10', '5', '15', '12'],
                                            ['十一', '2017/10/01', '2017/10/30', '1', '40', '10', '5', '15', '12']]
                                    }),
                                    columns: [
                                        {text: '迭代', dataIndex: 'a', menuDisabled: true},
                                        {text: '开始时间', dataIndex: 'b', menuDisabled: true},
                                        {text: '结束时间', dataIndex: 'c', menuDisabled: true},
                                        {text: '需求变更', dataIndex: 'd', menuDisabled: true},
                                        {text: '人力投入', dataIndex: 'e', menuDisabled: true},
                                        {text: '人均产出(KL)', dataIndex: 'f', menuDisabled: true},
                                        {text: '缺陷个数', dataIndex: 'g', menuDisabled: true},
                                        {text: '缺陷密度', dataIndex: 'h', menuDisabled: true},
                                        {text: '评审问题个数', dataIndex: 'i', menuDisabled: true}
                                    ]
                                }, {
                                    xtype: 'cartesian',
                                    width: '100%',
                                    maxWidth: 1024,
                                    minWidth: 500,
                                    height: 300,
                                    innerPadding: '0 40 0 40',
                                    legend: {
                                        type: 'sprite', // 'dom' is another possible value
                                        docked: 'bottom'
                                    },
                                    store: {
                                        fields: ['name', 'data1', 'data2', 'data3'],
                                        data: [{
                                            'name': 'metric one',
                                            'data1': 10,
                                            'data2': 12,
                                            'data3': 14,
                                            'target': 13
                                        }, {
                                            'name': 'metric two',
                                            'data1': 7,
                                            'data2': 8,
                                            'data3': 16,
                                            'target': 19
                                        }, {
                                            'name': 'metric three',
                                            'data1': 5,
                                            'data2': 2,
                                            'data3': 14,
                                            'target': 25
                                        }, {
                                            'name': 'metric four',
                                            'data1': 2,
                                            'data2': 14,
                                            'data3': 6,
                                            'target': 15
                                        }, {
                                            'name': 'metric five',
                                            'data1': 27,
                                            'data2': 38,
                                            'data3': 36,
                                            'target': 36
                                        }]
                                    },
                                    axes: [{
                                        type: 'category',
                                        position: 'bottom',
                                        fields: ['name'],
                                        title: {
                                            text: 'Sample Values',
                                            fontSize: 15
                                        }
                                    }, {
                                        type: 'category',
                                        position: 'left',
                                        fields: ['target'],
                                        title: {
                                            text: 'Sample Values',
                                            fontSize: 15
                                        }
                                    }],
                                    series: {
                                        type: 'bar',
                                        stacked: false,
                                        subStyle: {
                                            // fill: ['#0A3F50', '#30BDA7', '#96D4C6']
                                        },
                                        xField: 'name',
                                        yField: ['data1', 'data2', 'data3'],
                                        //数字标注
                                        label: {
                                            field: ['data1', 'data2', 'data3'],
                                            display: 'insideEnd',
                                            renderer: function (sprite, config, rendererData, index) {

                                            }
                                        }
                                    }
                                }]
                            },
                            {
                                title: '需求',
                                layout: 'border',
                                items: []
                            },
                            {title: '设计'},
                            {title: '开发'},
                            {title: '测试'},
                            {title: '构建'},
                            {title: '转测试'},
                            {title: '迭代管理'},
                            {title: '工程能力'},
                            {title: '验收'},
                            {title: '客户反馈'}
                        ]
                    }
                ]
            }]
    })
});