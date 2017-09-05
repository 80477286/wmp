package com.chinasoft.wireless.measurement.platform.management.employee.controller;

import com.mouse.web.supports.mvc.bind.annotation.EntityParam;
import com.mouse.web.supports.mvc.bind.annotation.MapParam;
import com.mouse.web.supports.mvc.request.PageParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpEntity;
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
    private static final String SERVICE = "hrm_services";

    @Autowired
    private DiscoveryClient client;

    @RequestMapping(value = "/employees", method = RequestMethod.POST)
    public Map<String, Object> getAllEmployees(@MapParam Map<String, Object> params, @EntityParam PageParam pageable) {
        OAuth2AuthenticationDetails details = (OAuth2AuthenticationDetails) SecurityContextHolder.getContext().getAuthentication().getDetails();
        List<ServiceInstance> instances = client.getInstances(SERVICE);
        if (instances != null && !instances.isEmpty()) {
            ServiceInstance instance = instances.get(0);
            URI uri = instance.getUri();
            Map<String, Object> param = new HashMap<>();
            param.put("params", params);
            param.put("pageable", pageable);
            Map<String, Object> variables = new HashMap<>();
            variables.put("params", "params");
            variables.put("pageable", "pageable");
            HttpEntity httpEntity = new HttpEntity(param);
            Page employees = (new RestTemplate()).postForEntity(uri.toString() + "/employee?query&access_token=" + details.getTokenValue(), httpEntity, Page.class, variables).getBody();
        }
        return null;
    }
}
