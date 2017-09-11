package com.chinasoft.wireless.wmp.vm.version.controller;

import com.chinasoft.wireless.wmp.vm.version.service.VersionServiceClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

@Controller
@RequestMapping(value = "/vm/version")
public class VersionController {

    @Autowired
    private VersionServiceClient versionService;

    @RequestMapping(value = "/index")
    public String index(@RequestParam LinkedMultiValueMap params, Model mv) {
        Map result = versionService.query(params);
        mv.addAllAttributes(result);
        return "vm/version/index";
    }

    @ResponseBody
    @RequestMapping(value = "query")
    public Map query(@RequestParam LinkedMultiValueMap params) {
        return versionService.query(params);
    }

    @ResponseBody
    @RequestMapping(value = "get_by_id")
    public Map getById(@RequestParam LinkedMultiValueMap params) {
        return versionService.getById(params);
    }

    @ResponseBody
    @RequestMapping(value = "save")
    public Map save(@RequestParam LinkedMultiValueMap params) {
        return versionService.save(params);
    }

    @ResponseBody
    @RequestMapping(value = "deletes")
    public Map deletes(@RequestParam LinkedMultiValueMap params) {
        return versionService.deletes(params);
    }
}
