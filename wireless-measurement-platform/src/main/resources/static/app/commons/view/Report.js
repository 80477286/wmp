Ext.define('App.commons.view.Report', {
    extend: 'Ext.panel.Panel',
    alias: ['widget.Report'],
    layout: 'vbox',
    items: [],
    listeners: {
        afterrender: function () {
            this.updateData([{x: 1}])
        }
    },
    defaults: {margin: '0 0 10 0'},
    updateData: function (datas) {
        if (!Ext.isEmpty(datas) && datas.length > 0) {
            for (var i = 0; i < datas.length; i++) {

                var report = datas[i];
                var reportDatas = report.data;
                var reportConfiguration = report.reportConfiguration;
                var chartConfigurations = report.reportConfiguration.chartConfigurations;
                var grid = this.createGrid(reportConfiguration, reportDatas);
                for (var j = 0; j < chartConfigurations.length; j++) {
                    var chartConfiguration = chartConfigurations[j];
                    this.createChart(grid.getStore(), chartConfiguration)
                }
            }
        }
    },
    createGrid: function (reportConfiguration,reportDatas) {
        var fields=this.createFields(reportConfiguration);
        var columns=this.createColumns(reportConfiguration);
        var opts = {
            width: '100%',
            forceFit: true,
            reserveScrollbar: false,// 预留滚动条位置
            disableSelection: false,
            loadMask: true,
            sortableColumns: false,
            enableColumnMove: false,
            store: Ext.create('Ext.data.ArrayStore', {
                fields:fields,
                data: reportDatas,
            }),
            columns: columns
        }
        var grid = Ext.create('Ext.grid.Panel', opts)
        this.add(grid)
        return grid;
    },
    createChart: function (store, chartConfiguration) {
        var axes = chartConfiguration.axes;
        var series = chartConfiguration.series;
        for (var i = 0; i < series.length; i++) {
            var item = series[i];
            if (item.type == 'bar') {
                var barOpts = {
                    stacked: false,
                    //选中时高亮
                    highlight: true,
                    //数字标注
                    label: {
                        field: item.yFields,
                        display: 'insideEnd',
                        renderer: function (sprite, config, rendererData, index) {

                        }
                    },//鼠标提示
                    tooltip: {
                        trackMouse: true,
                        showDelay: 0,
                        dismissDelay: 0,
                        hideDelay: 0,
                        renderer: function (tooltip, record, item) {
                            tooltip.setHtml(record.get('name') + ' \ ' + item.field + ': ' + record.get(item.field));
                        }
                    }
                };
                Ext.apply(item, barOpts);
            }
        }
        var opts = {
            width: '100%',
            height: 300,
            innerPadding: '0 40 0 40',
            legend: {
                type: 'sprite', // 'dom' is another possible value
                docked: 'bottom'
            },
            store: store,
            axes: report.chart.axes,
            series: series
        };
        var chart = Ext.create('Ext.chart.CartesianChart', opts)
        this.add(chart)
    }
})