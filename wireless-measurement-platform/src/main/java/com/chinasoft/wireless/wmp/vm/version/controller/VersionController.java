package com.chinasoft.wireless.wmp.vm.version.controller;

import com.chinasoft.wireless.wmp.vm.version.service.VersionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class VersionController {

    @Autowired
    private VersionService versionService;


    @RequestMapping(value = "/vm/version/query")
    public Map query(@RequestParam LinkedMultiValueMap params) {
        return versionService.query(params);
    }

    @RequestMapping(value = "/vm/version/get_by_id")
    public Map getById(@RequestParam LinkedMultiValueMap params) {
        return versionService.getById(params);
    }

    @RequestMapping(value = "/vm/version/save")
    public Map save(@RequestParam LinkedMultiValueMap params) {
        return versionService.save(params);
    }

    @RequestMapping(value = "/vm/version/deletes")
    public Map deletes(@RequestParam LinkedMultiValueMap params) {
        return versionService.deletes(params);
    }
}
