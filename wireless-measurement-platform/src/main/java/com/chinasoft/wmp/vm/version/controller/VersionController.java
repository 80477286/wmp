package com.chinasoft.wmp.vm.version.controller;

import com.chinasoft.wmp.vm.version.service.VersionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class VersionController {

    @Autowired
    private VersionService versionService;


    @RequestMapping(value = "/vm/version/query")
    public Map getAllEmployees(@RequestParam LinkedMultiValueMap params) {
        return versionService.query(params);
    }
}
