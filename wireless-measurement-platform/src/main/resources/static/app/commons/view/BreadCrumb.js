Ext.define('App.commons.view.BreadCrumb', {
    extend: 'Ext.Component',
    alias: ['widget.breadcrumb', 'widget.BreadCrumb'],
    baseCls: 'breadcrumb',
    childEls: {
        body: {dataRef: 'body'}
    },
    renderTpl: [
        '<style>',
        '.breadcrumb-pre{background-image:url("css/icons/page-last.png");width:16px;height:16px;float:left;margin:8px 5px auto 5px;}',
        '.breadcrumb{margin:0;}',
        '.breadcrumb-body{height:32px;display: block;list-style-type: decimal;-webkit-margin-before: 0;-webkit-margin-after:0;-webkit-margin-start: 0px;-webkit-margin-end: 0px;-webkit-padding-start: 10px;box-sizing: border-box;margin-top: 0;padding: 8px 15px;margin-bottom: 0px;list-style: none;background-color: #252525;}',
        '.breadcrumb-body:last-child{margin-bottom: 0;}',
        '.breadcrumb-body>li{display: inline-block;font-size:16px;}',
        '.breadcrumb-body>li+li:before {padding: 0 10px;color: #ccc;content: "/";}',
        '.breadcrumb-body>li,.breadcrumb-body>li a{cursor:pointer;text-decoration: none;color:chocolate;}',
        '.breadcrumb-body>li:hover,.breadcrumb-body>li a:hover{color: #FFF;}',
        //'.breadcrumb-body>li:last-child a{color:#efefef;}',
        '</style>',
        '<div class="breadcrumb-pre"></div>',
        '<ol  id="{id}-body" data-ref="body" class="{baseCls}-body">',
        '</ol>'
    ],
    initRenderData: function () {
        var data = this.callParent(arguments);
        return data;
    },
    onRender: function () {
        this.callParent(arguments);
        this.initItems();
    },
    initItems: function () {
        var view = this;
    },
    insertFirst: function (name, data) {
        var me = this;
        var ne = Ext.dom.Helper.insertFirst(this.body, {tag: 'li', html: name}, true);
        ne.addCls('breadcrumb-item');
        ne.data = data;
        ne.on({
            click: function () {
                me.fireEvent('itemclick', ne, name);
            }
        });
    }

})