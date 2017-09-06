package com.chinasoft.wireless.measurement.platform.management.employee.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.provider.authentication.OAuth2AuthenticationDetails;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/management")
public class EmployeeController {

    @Autowired
    DiscoveryClient client;

    @RequestMapping(value = "/employees", method = RequestMethod.POST)
    public Object getAllEmployees(@RequestParam LinkedMultiValueMap<String, Object> params) {
        List<ServiceInstance> instances = client.getInstances("hrm-service");
        if (instances != null && !instances.isEmpty()) {
            OAuth2AuthenticationDetails details = (OAuth2AuthenticationDetails) SecurityContextHolder.getContext().getAuthentication().getDetails();
            String token = details.getTokenValue();
            String type = details.getTokenType();
            ServiceInstance instance = instances.get(0);
            URI uri = instance.getUri();
            HttpHeaders httpHeaders = new HttpHeaders();
            httpHeaders.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
            httpHeaders.add("Authorization", type + " " + token);
            HttpEntity entity = new HttpEntity(params, httpHeaders);
            return (new RestTemplate()).postForEntity(uri.toString() + "/hrm/employee/query", entity, Map.class).getBody();
        }
        return null;
    }
}
