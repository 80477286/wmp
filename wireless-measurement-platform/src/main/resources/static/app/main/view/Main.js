Ext.define('App.main.view.Main', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.Main',
    layout: 'border',
    items: [
        {
            region: 'center',
            xtype: 'tabpanel',
            items: [
                {
                    title: '项目进展报告',
                    layout: 'vbox',
                    items: [{
                        xtype: 'gridpanel',
                        width: '100%', ui: 'test',
                        forceFit: true,
                        reserveScrollbar: false,// 预留滚动条位置
                        disableSelection: false,
                        loadMask: true,
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
                            type: 'numeric',
                            position: 'left',
                            fields: ['data1', 'data2', 'data3'],
                            title: {
                                text: 'Sample Values',
                                fontSize: 15
                            }
                        }],
                        series: [{
                            type: 'bar',
                            stacked: false,
                            //选中时高亮
                            highlight: true,
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
                            },
                            //鼠标提示
                            tooltip: {
                                trackMouse: true,
                                showDelay: 0,
                                dismissDelay: 0,
                                hideDelay: 0,
                                renderer: function (tooltip, record, item) {
                                    tooltip.setHtml(record.get('name') + ' \ ' + item.field + ': ' + record.get(item.field));
                                }
                            }
                        }, {
                            type: "line",
                            axis: "right",
                            xField: "name",
                            yField: "target"
                        }]
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
})