package com.chinasoft.wireless.wmp.organization.controller;

import com.chinasoft.wireless.wmp.organization.model.Organization;
import com.chinasoft.wireless.wmp.organization.service.IOrganizationService;
import com.mouse.web.supports.jpa.controller.BaseController;
import com.mouse.web.supports.jpa.service.IBaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by cwx183898 on 2017/8/10.
 */
@RestController
@RequestMapping({"/organization"})
public class OrganizationController extends BaseController<Organization, String> {
    @Autowired
    private IOrganizationService service;

    @Override
    protected IBaseService<Organization, String> getService() {
        return service;
    }

}
