Ext.onReady(function () {
    Ext.create('Ext.Viewport', {
        items: [{
            region: 'center',
            xtype: 'cartesian', width: 900, height: 400,
            axes: [
                {type: "category", position: "bottom", fields: "cm_name", title: "客户经理"},
                {type: "numeric", position: "left", fields: ['one', 'two','three', 'four',  'five'], title: '商机数量（个）'},
                {type: "numeric", position: "right", fields: ["12月预估完成(万元)", "12月累计目标(万元)"], title: "预估缺口(万元)"}],
            series: [
                {type: "line", axis: "right", xField: "cm_name", yField: "12月预估完成(万元)"},
                {type: "line", axis: "right", xField: "cm_name", yField: "12月累计目标(万元)"},
                {type: "bar", axis: "left", xField: "cm_name", yField: ['one','two','three','four','five']}],
            store: {
                fields: [
                    {name: "cm_name", type: "string"},
                    {name: 'one', type: "int"},
                    {name: 'two', type: "int"},
                    {name: 'three', type: "int"},
                    {name: 'four', type: "int"},
                    {name: 'five', type: "int"},
                    {name: '12月累计目标(万元)', type: "int"},
                    {name: '12月预估完成(万元)', type: "int"}],
                data: [
                    {cm_name: "薛长剑", two: 0, four: 0, three: 6, one: 8, five: 1, "12月累计目标(万元)": 0, "12月预估完成(万元)": 200},
                    {cm_name: "张翔", two: 9, four: 1, three: 1, one: 3, five: 0, "12月累计目标(万元)": 0, "12月预估完成(万元)": 7},
                    {cm_name: "王吉媛", two: 7, four: 2, three: 1, one: 3, five: 0, "12月累计目标(万元)": 0, "12月预估完成(万元)": 77},
                    {cm_name: "苏风英", two: 0, four: 1, three: 1, one: 3, five: 0, "12月累计目标(万元)": 0, "12月预估完成(万元)": 64},
                    {cm_name: "li", two: 2, four: 1, three: 1, one: 2, five: 1, "12月累计目标(万元)": 0, "12月预估完成(万元)": 46},
                    {cm_name: "xumy", two: 3, four: 1, three: 11, one: 13, five: 1, "12月累计目标(万元)": 0, "12月预估完成(万元)": 35},
                    {cm_name: "耿建", two: 4, four: 0, three: 0, one: 6, five: 2, "12月累计目标(万元)": 0, "12月预估完成(万元)": 94},
                    {cm_name: "liquan", two: 3, four: 1, three: 1, one: 2, five: 1, "12月累计目标(万元)": 0, "12月预估完成(万元)": 28},
                    {cm_name: "韩磊", two: 6, four: 0, three: 1, one: 1, five: 0, "12月累计目标(万元)": 0, "12月预估完成(万元)": 95}]
            }
        }]
    })
});