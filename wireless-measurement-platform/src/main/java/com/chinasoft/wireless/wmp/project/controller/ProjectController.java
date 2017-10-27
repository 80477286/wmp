package com.chinasoft.wireless.wmp.project.controller;

import com.chinasoft.wireless.wmp.project.model.Project;
import com.chinasoft.wireless.wmp.project.service.IProjectService;
import com.mouse.web.supports.jpa.controller.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/project")
public class ProjectController extends BaseController<Project, String> {
    @Autowired
    private IProjectService projectService;


    @Override
    protected IProjectService getService() {
        return projectService;
    }
}
