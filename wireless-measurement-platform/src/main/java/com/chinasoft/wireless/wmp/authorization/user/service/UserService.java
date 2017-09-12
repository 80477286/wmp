package com.chinasoft.wireless.wmp.authorization.user.service;


import com.mouse.web.supports.cloud.CloudServiceClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;

@SuppressWarnings("ALL")
@Service
public class UserService {
    private static final String SERVER_ID = "sso-server";
    @Autowired
    private CloudServiceClient client;

    public Map query(@RequestParam LinkedMultiValueMap params) {
        Map result = client.postForEntity(SERVER_ID, "/authorization/user/query", params);
        return result;
    }

    public Map getById(@RequestParam LinkedMultiValueMap params) {
        Map result = client.postForEntity(SERVER_ID, "/authorization/user/get_by_id", params);
        return result;
    }

    public Map save(@RequestParam LinkedMultiValueMap params) {
        Map result = client.postForEntity(SERVER_ID, "/authorization/user/save", params);
        return result;
    }


    public Map deletes(@RequestParam LinkedMultiValueMap params) {
        Map result = client.postForEntity(SERVER_ID, "/authorization/user/deletes", params);
        return result;
    }

}
