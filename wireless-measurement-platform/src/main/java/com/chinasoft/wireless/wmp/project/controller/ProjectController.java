package com.chinasoft.wireless.wmp.project.controller;

import com.chinasoft.wireless.wmp.project.model.Project;
import com.chinasoft.wireless.wmp.project.service.IProjectService;
import com.mouse.web.supports.jpa.controller.BaseController;
import com.mouse.web.supports.mvc.bind.annotation.JSON;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "/project")
public class ProjectController extends BaseController<Project, String> {
    @Autowired
    private IProjectService projectService;


    @Override
    protected IProjectService getService() {
        return projectService;
    }


    @JSON(excludeProperties = {"data.*\\.iterations", "data.*\\.parent"})
    @RequestMapping(value = "/query_by_po")
    private Page<Project> queryByOrganization(String id) {
        Map<String, Object> params = new HashMap<String, Object>(0);
        params.put("projectOrder.id", id);
        return getService().query(params, null);
    }


    @JSON(excludeProperties = {"data.*\\.iterations", "data.*\\.parent.*\\.parent", "data.*\\.parent.*\\.projects", "data.*\\.parent.*\\.organization"})
    @RequestMapping(value = "/edit")
    public Project edit(String id) {
        Project result = getService().findOne(id);
        return result;
    }


    @JSON(excludeProperties = {"data.*\\.iterations", "data.*\\.parent"})
    @RequestMapping(value = "/get_simple_by_id")
    public Project getSimpleById(String id) {
        Project result = getService().findOne(id);
        return result;
    }
}
