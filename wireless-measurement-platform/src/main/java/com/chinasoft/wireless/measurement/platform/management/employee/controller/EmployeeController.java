package com.chinasoft.wireless.measurement.platform.management.employee.controller;

import com.chinasoft.wireless.measurement.platform.management.employee.model.Employee;
import com.chinasoft.wireless.measurement.platform.management.employee.service.EmployeeService;
import com.mouse.web.supports.mvc.bind.annotation.EntityParam;
import com.mouse.web.supports.mvc.bind.annotation.MapParam;
import com.mouse.web.supports.mvc.request.PageParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.provider.authentication.OAuth2AuthenticationDetails;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/management")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;


    @RequestMapping(value = "/employees", method = RequestMethod.POST)
    public Page<Employee> getAllEmployees(@MapParam Map<String, Object> params) {
        return employeeService.query(params);
    }
}
