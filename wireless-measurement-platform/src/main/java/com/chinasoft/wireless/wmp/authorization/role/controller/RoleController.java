package com.chinasoft.wireless.wmp.authorization.role.controller;

import com.chinasoft.wireless.wmp.authorization.role.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

@Controller
@RequestMapping(value = "/authorization/role")
public class RoleController {

    @Autowired
    private RoleService versionService;

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
