package com.chinasoft.wireless.measurement.platform.management.employee.service;

import com.chinasoft.wireless.measurement.platform.management.configuration.FeignClientsConfigurationCustom;
import com.chinasoft.wireless.measurement.platform.management.employee.model.Employee;
import com.mouse.web.supports.mvc.request.PageParam;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;

@FeignClient(value = "http://192.168.0.32:8021", configuration = {FeignClientsConfigurationCustom.class})
public interface EmployeeService {
    @RequestMapping(params = "/hrm/employee?query=1")
    Page<Employee> query(@RequestParam Map<String, Object> params);
}
