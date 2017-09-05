package com.chinasoft.wireless.measurement.platform.management.employee.service;

import com.chinasoft.wireless.measurement.platform.management.employee.model.Employee;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;

@FeignClient(name = "hrm-service")
public interface EmployeeService {
    @RequestMapping(params = "/hrm/employee?query=1")
    Page<Employee> query(@RequestParam Map<String, Object> params);

    @RequestMapping(value = "/hrm/employee/update")
    String update(@RequestParam("address") String address, @RequestParam("name") String name);

}
