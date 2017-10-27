package com.chinasoft.wireless.wmp.organization.controller;

import com.chinasoft.wireless.wmp.organization.model.Organization;
import com.chinasoft.wireless.wmp.organization.service.IOrganizationService;
import com.mouse.web.supports.jpa.controller.BaseController;
import com.mouse.web.supports.jpa.service.IBaseService;
import com.mouse.web.supports.mvc.bind.annotation.JSON;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.ManyToOne;
import java.util.HashMap;
import java.util.Map;

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


    @JSON()
    @RequestMapping(value = "/get_children")
    private Page<Organization> getChildren(String id) {
        Map<String, Object> params = new HashMap<String, Object>(0);
        if (id == null || id.trim().isEmpty() || id.trim().toLowerCase().equals("root")) {
            params.put("parent.id_isnull", "");
        } else {
            params.put("parent.id", id);
        }
        return service.query(params, null);
    }
}
