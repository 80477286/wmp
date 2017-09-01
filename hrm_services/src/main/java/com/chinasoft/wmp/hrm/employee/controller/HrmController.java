package com.chinasoft.wmp.hrm.employee.controller;

import com.chinasoft.wmp.hrm.employee.model.Employee;
import com.chinasoft.wmp.hrm.employee.service.IEmployeeService;
import com.mouse.web.supports.mvc.bind.annotation.JSON;
import com.netflix.discovery.converters.Auto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;

@RestController
public class HrmController {
    @Autowired
    private IEmployeeService service;

    @RequestMapping("/hrm/employee/all")
    @JSON
    public List<Employee> allEmployee(Principal principal) {
        return service.query();
    }
}
