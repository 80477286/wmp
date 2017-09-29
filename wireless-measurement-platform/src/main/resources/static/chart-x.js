Ext.onReady(function () {
    Ext.create('Ext.Viewport', {
        items: [{
            region: 'center',
            xtype: 'cartesian', width: 900, height: 400,
            shadow: true,
            animate: true,
            shadow: true,
            legend: {
                type: 'sprite', // 'dom' is another possible value
                docked: 'bottom'
            },
            axes: [
                {
                    //XX轴定义
                    type: "category", position: "bottom",
                    //label文字斜体
                    label: {
                        rotate: {
                            degrees: -45
                        }
                    },
                    fields: "cm_name",
                    title: "客户经理"
                },
                {
                    //Y轴定义
                    type: "numeric",
                    //定义左边Y轴对应数据表格背景
                    grid: {
                        odd: {
                            opacity: 1,
                            fill: '#EEE',
                            stroke: '#FFF',
                            lineWidth: 1
                        }
                    },
                    position: "left",
                    fields: ['one', 'two', 'three', 'four', 'five'],
                    title: '商机数量（个）'
                },
                {
                    type: "numeric",
                    //右轴数字后显示%
                    // renderer: function (axis, label, layoutContext) {
                    //     return layoutContext.renderer(label) + '%';
                    // },
                    position: "right",
                    fields: ["12月预估完成(万元)", "12月累计目标(万元)"],
                    title: "预估缺口(万元)"
                }],
            series: [
                {
                    type: "line",
                    axis: "right",
                    xField: "cm_name",
                    yField: "12月预估完成(万元)"
                },
                {
                    type: "line",
                    axis: "right",
                    xField: "cm_name",
                    yField: "12月累计目标(万元)"
                },
                {
                    type: "bar",
                    axis: "left",
                    //多数据字段时每个数据字段显示一条柱子（默认为一根柱子不同颜色）
                    stacked: false,
                    //选中时高亮
                    highlight: true,
                    xField: "cm_name",
                    yField: ['one', 'two', 'three', 'four', 'five'],
                    //鼠标提示
                    tooltip: {
                        trackMouse: true,
                        showDelay: 0,
                        dismissDelay: 0,
                        hideDelay: 0,
                        renderer: function (tooltip, record, item) {
                            tooltip.setHtml(record.get('cm_name') + ': ' + record.get(item.field));
                        }
                    },
                    //数字标注
                    label: {
                        field: ['one', 'two', 'three', 'four', 'five'],
                        display: 'insideEnd',
                        renderer: function (sprite, config, rendererData, index) {

                        }
                    },
                    style: {
                        //柱子间距离
                        inGroupGapWidth: 7
                    }
                }],
            store: {
                fields: ["cm_name", 'one', 'two', 'three', 'four', 'five', '12月累计目标(万元)', '12月预估完成(万元)'],
                data: [
                    {cm_name: "薛长剑", two: 4, four: 1, three: 6, one: 8, five: 1, "12月累计目标(万元)": 0, "12月预估完成(万元)": 200},
                    {cm_name: "张翔", two: 9, four: 1, three: 1, one: 3, five: 4, "12月累计目标(万元)": 0, "12月预估完成(万元)": 7},
                    {cm_name: "王吉媛", two: 7, four: 2, three: 1, one: 3, five: 8, "12月累计目标(万元)": 0, "12月预估完成(万元)": 77},
                    {cm_name: "苏风英", two: 7, four: 1, three: 1, one: 3, five: 3, "12月累计目标(万元)": 0, "12月预估完成(万元)": 64},
                    {cm_name: "李军", two: 2, four: 1, three: 1, one: 2, five: 1, "12月累计目标(万元)": 0, "12月预估完成(万元)": 46},
                    {cm_name: "王芳", two: 3, four: 1, three: 11, one: 13, five: 1, "12月累计目标(万元)": 0, "12月预估完成(万元)": 35},
                    {cm_name: "耿建", two: 4, four: 3, three: 2, one: 6, five: 2, "12月累计目标(万元)": 0, "12月预估完成(万元)": 94},
                    {cm_name: "陈明", two: 3, four: 1, three: 1, one: 2, five: 1, "12月累计目标(万元)": 0, "12月预估完成(万元)": 28},
                    {cm_name: "韩磊", two: 6, four: 9, three: 1, one: 1, five: 2, "12月累计目标(万元)": 0, "12月预估完成(万元)": 95}]
            }
        }]
    })
});