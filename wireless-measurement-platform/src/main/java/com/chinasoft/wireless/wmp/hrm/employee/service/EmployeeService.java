package com.chinasoft.wireless.wmp.hrm.employee.service;

import com.mouse.web.supports.cloud.CloudResourceServiceClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;

@Service
public class EmployeeService {
    private static final String SERVER_ID = "hrm-service";
    @Autowired
    private CloudResourceServiceClient client;

    public Map query(@RequestParam LinkedMultiValueMap params) {
        Map result = client.postForEntity(SERVER_ID, "/hrm/employee/query", params, Map.class).getBody();
        return result;
    }

    public Map getById(@RequestParam LinkedMultiValueMap params) {
        Map result = client.postForEntity(SERVER_ID, "/hrm/employee/get_by_id", params, Map.class).getBody();
        return result;
    }

    public Map save(@RequestParam LinkedMultiValueMap params) {
        Map result = client.postForEntity(SERVER_ID, "/hrm/employee/save", params, Map.class).getBody();
        return result;
    }


    public Map deletes(@RequestParam LinkedMultiValueMap params) {
        Map result = client.postForEntity(SERVER_ID, "/hrm/employee/deletes", params, Map.class).getBody();
        return result;
    }

}
