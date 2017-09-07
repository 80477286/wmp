package com.chinasoft.wireless.wmp.hrm.employee.controller;

import com.chinasoft.wireless.wmp.hrm.employee.model.Employee;
import com.chinasoft.wireless.wmp.hrm.employee.service.IEmployeeService;
import com.mouse.web.supports.jpa.controller.BaseController;
import com.mouse.web.supports.mvc.bind.annotation.EntityParam;
import com.mouse.web.supports.mvc.bind.annotation.JSON;
import com.mouse.web.supports.mvc.bind.annotation.MapParam;
import com.mouse.web.supports.mvc.request.PageParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/hrm/employee")
public class HrmController extends BaseController<Employee, String> {
    @Autowired
    private IEmployeeService service;

    @Override
    public IEmployeeService getService() {
        return service;
    }
}
