Ext.define('App.reportconfiguration.view.ReportConfigurationEditorWindow', {
    extend: 'App.reportconfiguration.view.BaseReportConfigurationEditor',
    alias: 'widget.FormWindow',
    config: {
        window: {
            iconCls: 'edit',
            minWidth: 300,
            minHeight: 150,
            layout: 'border',
            modal: false,
            resizable: false,
            listeners: {
                afterrender: function () {
                    if (this.form.isEdit == true) {
                        if (Ext.isEmpty(app.editors)) {
                            app.editors = {};
                        }
                        app.editors[this.id] = this
                    }
                },
                close: function () {
                    try {
                        delete app.editors[this.id];
                    } catch (e) {
                        Ext.log({
                            msg: '移除数据编辑器出现异常',
                            level: 'error',
                            stack: e
                        })
                    }
                }
            },
            buttons: {
                save: {
                    text: '保存',
                    iconCls: 'save',
                    index: 0,
                    height: 30,
                    handler: function (btn, e) {
                        var me = this.up('window').form;
                        me.saveHandler();
                    }
                },
                reset: {
                    text: '重置',
                    iconCls: 'reset',
                    index: 1,
                    height: 30,
                    hidden: true,
                    handler: function (btn, e) {
                        this.up('window').form.reset(btn, e);
                    }
                },
                cancel: {
                    text: '取消',
                    iconCls: 'cancel',
                    index: 2,
                    height: 30,
                    handler: function (btn, e) {
                        this.up('window').form.cancel(btn, e);
                    }
                }
            }
        }
    },
    listeners: {
        save: function () {
            this.window.form.resetBySave=false;
            this.close();
        }
    },
    createWindow: function (options) {
        var me = this;

        Ext.merge(this.window, options);
        // 初始化按钮
        this.initButtons(this.window);
        // 设置form为center显示

        this.window.items = this;
        this.window = Ext.create('Extend.window.ExtendWindow', this.window)
        this.window.form = this;
        this.window.setTitle(this.window.title || this.title || '编辑');
        this.window.setIconCls(this.window.iconCls || this.iconCls);
        this.setTitle(null);
        this.setIconCls(null);
        return this.window;
    },
    initButtons: function (config) {
        if (Ext.isEmpty(config.buttons)) {
            return;
        }
        if (Ext.isObject(config.buttons)) {
            if (!(config.buttons instanceof Ext.Toolbar)) {
                var btns = [];
                Ext.Object.each(config.buttons, function (key, value) {
                    value.action = key;
                    btns.push(value);
                })
                btns = Ext.Array.sort(btns, function (a, b) {
                    a.index = Ext.isEmpty(a.index) ? Number.MAX_VALUE : a.index;
                    b.index = Ext.isEmpty(b.index) ? Number.MAX_VALUE : b.index;
                    return (a.index === b.index) ? 0 : ((a.index < b.index)
                        ? -1
                        : 1);
                })
                config.buttons = btns;
            }
        }
    },
    show: function (options) {
        this.createWindow(options).show();
        return this;
    },
    close: function () {
        this.window.close();
    },
    cancel: function (btn, e) {
        this.window.close();
    },
    saveHandler: function () {
        var me = this;
        var grids = this.query('grid');
        if (Ext.isEmpty(roweditor)) {
            for (var i = 0; i < grids.length; i++) {
                var grid = grids[i];
                var roweditor = grid.findPlugin('rowediting');
                if (!Ext.isEmpty(roweditor) && roweditor.editing === true) {
                    Extend.Msg.error('错误', '表单“' + grid.getTitle()
                        + '”正处于编辑状态，请结束编辑后重试！')
                    return;
                }
            }
        }
        if (me.isValid()) {
            if (me.recordable === true) {
                Ext.Msg.show({
                    title: '描述信息',
                    message: "请输入添加或修改数据的描述信息，此信息必填（长度小于1024）",
                    buttons: Ext.Msg.OKCANCEL,
                    multiline: 30,
                    minWidth: 500,
                    callback: function (opts, value) {
                        if (opts === 'ok') {
                            if (Ext.isEmpty(value)) {
                                Extend.Msg.error('错误', "描述信息必须填写，请重新保存！");
                                return;
                            }
                            ;
                            me.action = 'save';
                            var params = {
                                submitEmptyText: me.submitEmptyText,
                                params: Ext.apply({
                                    'operationRecord.description': value
                                }, me.getParams())
                            }
                            me.up('window').form.submit(params);
                        }
                    }
                });
            } else {
                me.action = 'save';
                var params = {
                    submitEmptyText: me.submitEmptyText,
                    params: me.getParams()
                }
                me.up('window').form.submit(params);
            }
        }
    }
})