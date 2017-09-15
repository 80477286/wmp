package com.chinasoft.wireless.wmp.authorization.role.service;


import com.mouse.web.supports.cloud.CloudResourceServiceClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;

@SuppressWarnings("ALL")
@Service
public class RoleService {
    private static final String SERVER_ID = "sso-server";
    @Autowired
    private CloudResourceServiceClient client;

    public Map query(@RequestParam LinkedMultiValueMap params) {
        Map result = client.postForEntity(SERVER_ID, "/resource/authorization/role/query", params, Map.class).getBody();
        return result;
    }

    public Map getById(@RequestParam LinkedMultiValueMap params) {
        Map result = client.postForEntity(SERVER_ID, "/resource/authorization/role/get_by_id", params, Map.class).getBody();
        return result;
    }

    public Map save(@RequestParam LinkedMultiValueMap params) {
        Map result = client.postForEntity(SERVER_ID, "/resource/authorization/role/save", params, Map.class).getBody();
        return result;
    }


    public Map deletes(@RequestParam LinkedMultiValueMap params) {
        Map result = client.postForEntity(SERVER_ID, "/resource/authorization/role/deletes", params, Map.class).getBody();
        return result;
    }

}
