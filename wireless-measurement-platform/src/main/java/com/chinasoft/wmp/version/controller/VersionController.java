package com.chinasoft.wmp.version.controller;

import com.chinasoft.wmp.version.model.Version;
import com.chinasoft.wmp.version.service.VersionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
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


    @RequestMapping(value = "/version/query", method = RequestMethod.POST)
    public Map getAllEmployees(@RequestParam LinkedMultiValueMap params) {
        return versionService.query(params);
    }
}
