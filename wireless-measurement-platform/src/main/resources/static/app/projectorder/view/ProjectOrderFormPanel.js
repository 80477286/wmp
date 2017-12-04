Ext.define("App.projectorder.view.ProjectOrderFormPanel", {
    extend: 'Ext.form.Panel',
    alias: 'widget.ProjectOrderFormPanel',
    requires: ['App.project.field.ProjectTypeComboBox', 'App.project.field.SiteComboBox'],
    defaults: {
        labelWidth: 110,
        columnWidth: 1,
        readOnly: true
    },
    title: 'PO信息',
    tpl: ['<div style="padding: 5px;">',
        '<style type="text/css">',
        '.efefef{background:#efefef;}.poinfo{list-style: none;padding: 0;margin: 0;} .poinfo .item{display: flex;height: 28px;line-height: 28px;}  .poinfo .item .title{width: 150px;text-align: right;}  .poinfo .item .content{margin-left: 10px;}',
        '</style>',
        '<ul class="poinfo">',
        '<li class="item" style=""><div  class="title">PO名称:</div><div class="content"> {name}</div></li>',
        '<li class="item efefef" style=""><div  class="title">PO号:</div><div class="content"> {po}</div></li>',
        '<li class="item" style=""><div  class="title">内部PO号:</div><div class="content"> {innerPo}</div></li>',
        '<li class="item efefef" style=""><div  class="title">合同类型:</div><div class="content"> {contractType}</div></li>',
        '<li class="item" style=""><div  class="title">交付部:</div><div class="content"> {deliveryDepartment}</div></li>',
        '<li class="item efefef" style=""><div  class="title">华为PDU:</div><div class="content">{pdu.name}</div></li>',
        '<li class="item" style=""><div  class="title">项目类型:</div><div class="content"> {projectType}</div></li>',
        '<li class="item efefef" style=""><div  class="title">交付部经理:</div><div class="content"> {deliveryManager}</div></li>',
        '<li class="item" style=""><div  class="title">华为PDU外包代表:</div><div class="content"> {huaweiPduOutsourcingRepresentatives}</div></li>',
        '<li class="item efefef" style=""><div  class="title">合同工作量(人/天):</div><div class="content"> {contractWorkload}</div></li>',
        '<li class="item" style=""><div  class="title">合同金额(元):</div><div class="content"> {contractAmount}</div></li>',
        '<li class="item efefef" style=""><div  class="title">立项时间:</div><div class="content"> {startTime:substr(0, 10)}</div></li>',
        '<li class="item" style=""><div  class="title">预计开始时间:</div><div class="content"> {planStartTime:substr(0, 10)}</div></li>',
        '<li class="item efefef" style=""><div  class="title">项目结束时间:</div><div class="content"> {endTime:substr(0, 10)}</div></li>',
        '</ul>',
        '</div>'],
    initComponent: function () {
        var me = this;
        this.loader = {
            loadMask: '加载...',
            loadOnRender: true,
            autoLoad: true,
            url: 'projectorder/edit',
            params: {id: me.up('ProjectOrderReport').node.data.id},
            renderer: function (loader, response, active) {
                var result = response.result;
                if (result.success == true) {
                    response.result.data.pdu = response.result.data.parent;
                    me.setData(response.result.data);
                }
                return true;
            }
        }
        this.callParent(arguments);
    }
})
