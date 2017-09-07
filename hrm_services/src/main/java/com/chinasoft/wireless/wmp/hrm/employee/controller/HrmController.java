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

    @RequestMapping("/query")
    @JSON(excludeProperties = {".*\\.cdt"})
    public Page<Employee> query(@MapParam Map<String, Object> params, @EntityParam PageParam pageable) {
        Page<Employee> page = super.query(params, pageable);
        return page;
    }

    @JSON(excludeProperties = {".*\\.cdt"})
    @RequestMapping(value = "/get_by_id", method = RequestMethod.GET)
    public Employee getById(@RequestParam("id") String id) {
        return super.getById(id);
    }

    @JSON(excludeProperties = {".*\\.cdt"})
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public Employee save(@RequestBody Employee employee) {
        return super.save(employee);
    }

    @JSON(excludeProperties = {".*\\.cdt"})
    @RequestMapping(value = "/delete")
    public boolean delete(@RequestParam("id") String id) {
        return super.delete(id);
    }

    @JSON(excludeProperties = {".*\\.cdt"})
    @RequestMapping(value = "/deletes", method = RequestMethod.POST)
    public boolean deletes(@RequestBody String[] ids) {
        return super.deletes(ids);
    }
}
