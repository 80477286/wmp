package com.chinasoft.wireless.wmp.hrm.employee.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.provider.authentication.OAuth2AuthenticationDetails;
import org.springframework.stereotype.Controller;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;

import java.net.URI;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping(value = "/hrm/employee")
public class EmployeeController {

    @Autowired
    DiscoveryClient client;

    @RequestMapping(value = "/index")
    public String index(ModelAndView mv) {


        return "hrm/employee/index";
    }

    @ResponseBody
    @RequestMapping(value = "/query", method = RequestMethod.POST)
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

    @ResponseBody
    @RequestMapping(value = "/get_by_id", method = RequestMethod.POST)
    public Object getOne(@RequestParam LinkedMultiValueMap<String, Object> params) {
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
            return (new RestTemplate()).postForEntity(uri.toString() + "/hrm/employee/get_by_id", entity, Map.class).getBody();
        }
        return null;
    }

    @ResponseBody
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public Object save(@RequestParam LinkedMultiValueMap<String, Object> params) {
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
            return (new RestTemplate()).postForEntity(uri.toString() + "/hrm/employee/save", entity, Map.class).getBody();
        }
        return null;
    }

    @ResponseBody
    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public Object delete(@RequestParam LinkedMultiValueMap<String, Object> params) {
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
            return (new RestTemplate()).postForEntity(uri.toString() + "/hrm/employee/deletes", entity, Map.class).getBody();
        }
        return null;
    }

}
