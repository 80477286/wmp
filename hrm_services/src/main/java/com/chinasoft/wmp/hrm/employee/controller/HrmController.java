package com.chinasoft.wmp.hrm.employee.controller;

import com.chinasoft.wmp.hrm.employee.model.Employee;
import com.chinasoft.wmp.hrm.employee.service.IEmployeeService;
import com.mouse.web.supports.jpa.controller.BaseController;
import com.mouse.web.supports.mvc.bind.annotation.EntityParam;
import com.mouse.web.supports.mvc.bind.annotation.JSON;
import com.mouse.web.supports.mvc.bind.annotation.MapParam;
import com.mouse.web.supports.mvc.request.PageParam;
import com.netflix.discovery.converters.Auto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/employee")
public class HrmController extends BaseController<Employee, String> {
    @Autowired
    private IEmployeeService service;

    @Override
    public IEmployeeService getService() {
        return service;
    }

    @Override
    @RequestMapping(params = "query")
    public Page<Employee> query(@MapParam Map<String, Object> params, @EntityParam PageParam pageable) {
        return super.query(params, pageable);
    }
}
