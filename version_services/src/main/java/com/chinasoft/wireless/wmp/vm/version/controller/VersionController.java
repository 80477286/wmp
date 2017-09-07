package com.chinasoft.wireless.wmp.vm.version.controller;

import com.chinasoft.wireless.wmp.vm.version.model.Version;
import com.chinasoft.wireless.wmp.vm.version.service.IVersionService;
import com.mouse.web.supports.jpa.controller.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/vm/version")
public class VersionController extends BaseController<Version, String> {
    @Autowired
    private IVersionService service;

    @Override
    public IVersionService getService() {
        return service;
    }
}
