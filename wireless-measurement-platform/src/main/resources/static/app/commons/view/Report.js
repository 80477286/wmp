Ext.define('App.commons.view.Report', {
    extend: 'Ext.panel.Panel',
    alias: ['widget.Report'],
    layout: 'vbox',
    items: [],
    listeners:{afterrender:function(){
        this.createGrid()
    }},
    updateData: function (datas) {
        if (!Ext.isEmpty(datas) && datas.length > 0) {
            for (var i = 0; i < datas.length; i++) {
                var data = datas[i];
                createGrid(data);
            }
        }
    },
    createGrid: function (data) {
        var opts = {
            width: '100%',
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
        };
        var grid = Ext.create('Ext.grid.Panel', opts)
        this.add(grid)
    }
})