package com.chinasoft.wireless.wmp.hrm.employee.controller;

import com.chinasoft.wireless.wmp.hrm.employee.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.bind.annotation.*;

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
