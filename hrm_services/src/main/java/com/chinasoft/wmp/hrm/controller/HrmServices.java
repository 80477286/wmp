package com.chinasoft.wmp.hrm.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HrmServices {

    @RequestMapping("/hrm/all_employee")
    public String allEmployee() {
        return "all";
    }
}
