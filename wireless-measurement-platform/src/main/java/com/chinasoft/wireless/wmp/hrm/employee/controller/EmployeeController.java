package com.chinasoft.wireless.wmp.hrm.employee.controller;

import com.chinasoft.wireless.utils.MicroServiceClient;
import com.chinasoft.wireless.wmp.hrm.employee.service.EmployeeService;
import com.chinasoft.wireless.wmp.vm.version.service.VersionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.provider.authentication.OAuth2AuthenticationDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;

import java.net.URI;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping(value = "/hrm/employee")
public class EmployeeController {
    @Autowired
    private EmployeeService service;

    @RequestMapping(value = "/index")
    public String index(@RequestParam LinkedMultiValueMap params, Model mv) {
        Map result = service.query(params);
        mv.addAllAttributes(result);
        return "hrm/employee/index";
    }

    @ResponseBody
    @RequestMapping(value = "query")
    public Map query(@RequestParam LinkedMultiValueMap params) {
        return service.query(params);
    }

    @ResponseBody
    @RequestMapping(value = "get_by_id")
    public Map getById(@RequestParam LinkedMultiValueMap params) {
        return service.getById(params);
    }

    @ResponseBody
    @RequestMapping(value = "save")
    public Map save(@RequestParam LinkedMultiValueMap params) {
        return service.save(params);
    }

    @ResponseBody
    @RequestMapping(value = "deletes")
    public Map deletes(@RequestParam LinkedMultiValueMap params) {
        return service.deletes(params);
    }

}
