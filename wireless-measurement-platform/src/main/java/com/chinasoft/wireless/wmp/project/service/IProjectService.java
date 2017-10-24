package com.chinasoft.wireless.wmp.project.service;

import com.chinasoft.wireless.wmp.organization.model.Organization;
import com.chinasoft.wireless.wmp.project.model.Project;
import com.mouse.web.supports.jpa.service.IBaseService;

/**
 * Created by cwx183898 on 2017/8/9.
 */
public interface IProjectService extends IBaseService<Project, String> {
    Project getUserCurrentProject();

    String getUserCurrentProjectId();
}
