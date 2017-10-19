Ext.define('App.commons.view.Report', {
    extend: 'Ext.panel.Panel',
    alias: ['widget.Report'],
    layout: 'vbox',
    items: [],
    defaults: {margin: '0 0 10 0'},
    load: function (url, params) {
        var me = this;
        Ext.defer(function () {
            me.mask('加载...');
            Ext.Ajax.request({
                url: url,
                params: params,
                success: function (resp) {
                    me.updateData([resp.result.data])
                },
                callback: function () {
                    me.unmask();
                }
            });
        }, 50);
    },
    updateData: function (datas) {
        if (!Ext.isEmpty(datas) && datas.length > 0) {
            for (var i = 0; i < datas.length; i++) {
                var report = datas[i];
                var reportConfiguration = report.reportConfiguration;
                var chartConfigurations = report.reportConfiguration.chartConfigurations;
                var reportDatas = this.initReportData(reportConfiguration.kpiConfigurations, report.data);

                var grid = this.createGrid(reportConfiguration, reportDatas);
                for (var j = 0; j < chartConfigurations.length; j++) {
                    var chartConfiguration = chartConfigurations[j];
                    this.createChart(grid.getStore(), chartConfiguration)
                }
            }
        }
    },
    initReportData: function (kpiConfigurations, datas) {
        var dts = new Ext.util.MixedCollection();

        Ext.Array.each(kpiConfigurations, function (kpiConfiguration) {
            dts.add(kpiConfiguration.field, kpiConfiguration.dataType);
        });
        var initedDatas = [];
        Ext.Array.each(datas, function (data) {
            var line = {};
            for (key in data) {
                var value = data[key];
                var dt = dts.get(key);
                if (Ext.isEmpty(dt) || dt == 'string') {
                    line[key] = value;
                } else if (dt == 'int') {
                    line[key] = parseInt(value)
                } else if (dt == 'float') {
                    line[key] = parseFloat(value)
                } else if (dt == 'date') {
                    line[key] = new Date(value)
                }
            }
            initedDatas.push(line);
        })
        return initedDatas;
    },
    createGrid: function (reportConfiguration, reportDatas) {
        var fields = this.createFields(reportConfiguration);
        var columns = this.createColumns(reportConfiguration);
        var opts = {
            width: '100%',
            forceFit: true,
            reserveScrollbar: false,// 预留滚动条位置
            disableSelection: false,
            loadMask: true,
            sortableColumns: false,
            enableColumnMove: false,
            store: Ext.create('Ext.data.Store', {
                fields: fields,
                data: reportDatas,
            }),
            columns: columns
        }
        var grid = Ext.create('Ext.grid.Panel', opts)
        this.add(grid)
        return grid;
    },
    createFields: function (reportConfiguration) {
        var fields = [];
        var kpiConfigurations = reportConfiguration.kpiConfigurations
        Ext.Array.each(kpiConfigurations, function (kpiConfiguration) {
            fields.push(kpiConfiguration.field)
        });
        return fields;
    },
    createColumns: function (reportConfiguration) {
        var columns = [];
        var kpiConfigurations = reportConfiguration.kpiConfigurations
        Ext.Array.each(kpiConfigurations, function (kpiConfiguration) {
            var dataType = kpiConfiguration.dataType;
            var xtype = 'gridcolumn';
            if ((dataType == 'float' || dataType == 'int')) {
                xtype = 'numbercolumn';
            } else if (dataType == 'date') {
                xtype = 'datecolumn';
            }
            columns.push({
                xtype: xtype,
                dataIndex: kpiConfiguration.field,
                text: kpiConfiguration.name,
                type: dataType,
                format: kpiConfiguration.format,
                formatter: kpiConfiguration.formatter
            })
        });
        return columns;
    },
    createChart: function (store, chartConfiguration) {
        var axes = chartConfiguration.axes;

        for (var i = 0; i < axes.length; i++) {
            var item = axes[i];
            if (!Ext.isArray(item.fields)) {
                item.srcFields = item.fields;
                item.fields = item.fields.replace(/\s/g, '')
                item.fields = item.fields.split(',');
            }
            if (item.type == 'category') {
                //label文字斜体
                item.label = {
                    rotate: {
                        degrees: -45
                    }
                };
            } else if (item.type == 'numeric') {
                //定义左边Y轴对应数据表格背景
                item.grid = {
                    odd: {
                        opacity: 1,
                        fill: '#EEE',
                        stroke: '#FFF',
                        lineWidth: 1
                    }
                };
            }
        }
        var series = chartConfiguration.series;
        for (var i = 0; i < series.length; i++) {
            var item = series[i];
            item.yField = item.yFields;
            if (!Ext.isArray(item.yField)) {
                item.srcYFields = item.yField;
                item.yField = item.yField.replace(/\s/g, '')
                item.yField = item.yField.split(',');
            }
            if (!Ext.isArray(item.yFieldAliases)) {
                item.srcYFields = item.yFieldAliases;
                item.yFieldAliases = item.yFieldAliases.replace(/\s/g, '')
                item.title = item.yFieldAliases.split(',');
            }
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
                height: 400,
                innerPadding: '0 40 0 40',
                legend: {
                    listeners: {
                        initialize: function () {
                            console.log(argumets)
                        }
                    },
                    // type: 'sprite', // 'dom' is another possible value
                    docked: 'bottom',
                    store: {}
                },
                insetPadding: Ext.isEmpty(chartConfiguration.title) ? 0 : '50 10 0 10',
                sprites: Ext.isEmpty(chartConfiguration.title) ? [] : [{
                    type: 'text',
                    text: chartConfiguration.title,
                    fontSize: 22,
                    width: 100,
                    height: 30,
                    x: 40, // the sprite x position
                    y: 20 // the sprite y position
                }],
                store: store,
                axes: axes,
                series: series
            }
        var chart = Ext.create('Ext.chart.CartesianChart', opts)
        this.add(chart)
    }
})