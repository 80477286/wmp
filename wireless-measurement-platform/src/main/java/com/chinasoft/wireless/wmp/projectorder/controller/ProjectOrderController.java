package com.chinasoft.wireless.wmp.projectorder.controller;

import com.chinasoft.wireless.wmp.projectorder.model.ProjectOrder;
import com.chinasoft.wireless.wmp.projectorder.service.IProjectOrderService;
import com.mouse.web.supports.jpa.controller.BaseController;
import com.mouse.web.supports.jpa.service.IBaseService;
import com.mouse.web.supports.mvc.bind.annotation.JSON;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by cwx183898 on 2017/8/10.
 */
@RestController
@RequestMapping({"/projectorder"})
public class ProjectOrderController extends BaseController<ProjectOrder, String> {
    @Autowired
    private IProjectOrderService service;

    @Override
    protected IBaseService<ProjectOrder, String> getService() {
        return service;
    }

    @JSON(excludeProperties = {"data.*\\.projects", "data.*\\.parent"})
    @RequestMapping(value = "/query_by_organization")
    private Page<ProjectOrder> queryByOrganization(String id) {
        Map<String, Object> params = new HashMap<String, Object>(0);
        params.put("organization.id", id);
        return service.query(params, null);
    }


    @JSON(excludeProperties = {"data.*\\.children", "data.*\\.parent.*\\.projectOrders", "data.*\\.parent.*\\.parent", "data.*\\.parent.*\\.children"})
    @RequestMapping(value = "/edit")
    public ProjectOrder edit(String id) {
        ProjectOrder result = getService().findOne(id);
        return result;
    }


    @JSON(excludeProperties = {"data.*\\.projects", "data.*\\.organization"})
    @RequestMapping(value = "/get_simple_by_id")
    public ProjectOrder getSimpleById(String id) {
        ProjectOrder result = getService().findOne(id);
        return result;
    }
}
