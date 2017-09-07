package com.chinasoft.wmp.vm.version.controller;

import com.chinasoft.wmp.vm.version.model.Version;
import com.chinasoft.wmp.vm.version.service.IVersionService;
import com.mouse.web.supports.jpa.controller.BaseController;
import com.mouse.web.supports.mvc.bind.annotation.EntityParam;
import com.mouse.web.supports.mvc.bind.annotation.JSON;
import com.mouse.web.supports.mvc.bind.annotation.MapParam;
import com.mouse.web.supports.mvc.request.PageParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping(value = "/vm/version")
public class VersionController extends BaseController<Version, String> {
    @Autowired
    private IVersionService service;

    @Override
    public IVersionService getService() {
        return service;
    }

    @RequestMapping(value = "/query")
    @JSON(excludeProperties = {".*\\.cdt"})
    public Page<Version> query(@MapParam Map<String, Object> params, @EntityParam PageParam pageable) {
        return null;//super.query(params, pageable);
    }
}
