Ext.define('App.main.view.Header', {
    extend: 'Ext.Component',
    alias: ['widget.Header'],
    childEls: {
        body: {dataRef: 'body'}
    },
    renderTpl: [
        '<div  id="{id}-body" data-ref="body" class="{baseCls}-body" style="background-color: #333"></div>'
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
        var spec = {tag: 'div'};
        var ne = Ext.dom.Helper.append(this.body, spec, true);
        ne.applyStyles({
            backgroundImage: "url('/images/logo5.png')",
            backgroundRepeat: "no-repeat",
           backgroundPosition: 'center center',
            width: '128px',
            height: '46px'
        });
    }
})