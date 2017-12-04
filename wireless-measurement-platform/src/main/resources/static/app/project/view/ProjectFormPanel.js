Ext.define("App.project.view.ProjectFormPanel", {
    extend: 'Ext.form.Panel',
    alias: 'widget.ProjectFormPanel',
    requires: ['App.hrm.employee.field.EmployeeComboBox', 'App.project.field.ProjectTypeComboBox', 'App.project.field.IsInternetProjectComboBox', 'App.project.field.BillingTypeComboBox',
        'App.project.field.ImplementationStatusComboBox'],
    defaults: {
        readOnly: true
    },
    title: '项目信息',
    tpl: ['<div style="padding: 5px;">',
        '<style type="text/css">',
        '.poinfo{list-style: none;padding: 0;margin: 0;} .poinfo .item{display: flex;height: 28px;line-height: 28px;}  .poinfo .item .title{width: 150px;text-align: right;}  .poinfo .item .content{margin-left: 10px;}',
        '</style>',
        '<ul class="poinfo">',
        '<li class="item" style=""><div  class="title">PO号:</div><div class="content"> {parent.po}</div></li>',
        '<li class="item" style=""><div  class="title">PO名称:</div><div class="content"> {parent.name}</div></li>',
        '<li class="item" style=""><div  class="title">项目名称:</div><div class="content"> {name}</div></li>',
        '<li class="item" style=""><div  class="title">项目类型:</div><div class="content"> {projectType}</div></li>',
        '<li class="item" style=""><div  class="title">项目编码:</div><div class="content"> {projectCode}</div></li>',
        '<li class="item" style=""><div  class="title">项目工作量:</div><div class="content">{projectWorkload}</div></li>',
        '<li class="item" style=""><div  class="title">业务大类:</div><div class="content"> {businessCategory}</div></li>',
        '<li class="item" style=""><div  class="title">业务小类:</div><div class="content"> {businessSubclasses}</div></li>',
        '<li class="item" style=""><div  class="title">是否上网项目:</div><div class="content"> {isInternetProject}</div></li>',
        '<li class="item" style=""><div  class="title">规模(KLOC):</div><div class="content"> {size}</div></li>',
        '<li class="item" style=""><div  class="title">QA:</div><div class="content"> {qa}</div></li>',
        '<li class="item" style=""><div  class="title">PO占比(%):</div><div class="content"> {poProportion}</div></li>',
        '<li class="item" style=""><div  class="title">计费类型:</div><div class="content"> {billingType}</div></li>',
        '<li class="item" style=""><div  class="title">实施状态:</div><div class="content"> {implementationStatus}</div></li>',
        '<li class="item" style=""><div  class="title">项目开始时间:</div><div class="content"> {startDate:substr(0, 10)}</div></li>',
        '<li class="item" style=""><div  class="title">计划结项时间:</div><div class="content"> {plannedEndDate:substr(0, 10)}</div></li>',
        '<li class="item" style=""><div  class="title">项目经理:</div><div class="content"> {projectManager}</div></li>',
        '<li class="item" style=""><div  class="title">描述:</div><div class="content"> {description}</div></li>',
        '</ul>',
        '</div>'],
    initComponent: function () {
        var me = this;
        this.loader = {
            loadMask: '加载...',
            loadOnRender: true,
            autoLoad: true,
            url: 'project/edit',
            params: {id: me.up('IterationReport').node.data.id},
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
});
