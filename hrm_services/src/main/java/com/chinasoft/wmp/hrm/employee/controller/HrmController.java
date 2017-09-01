package com.chinasoft.wmp.hrm.employee.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class HrmController {

    @RequestMapping("/employee/hrm/all_employee")
    public String allEmployee(Principal principal) {
        return "all";
    }
}
