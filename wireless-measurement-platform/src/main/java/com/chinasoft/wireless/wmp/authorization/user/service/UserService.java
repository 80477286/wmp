package com.chinasoft.wireless.wmp.authorization.user.service;


import com.mouse.web.supports.cloud.CloudResourceServiceClient;
import com.mouse.web.supports.mvc.bind.annotation.JSON;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.LinkedHashMap;
import java.util.Map;

@SuppressWarnings("ALL")
@Service
public class UserService {
    private static final String SERVER_ID = "sso-server";
    @Autowired
    private CloudResourceServiceClient client;

    public Map query(@RequestParam LinkedMultiValueMap params) {
        Map result = client.postForEntity(SERVER_ID, "/sso/resource/authorization/user/query", params, Map.class).getBody();
        return result;
    }

    public Map getById(@RequestParam LinkedMultiValueMap params) {
        Map result = client.postForEntity(SERVER_ID, "/sso/resource/authorization/user/get_by_id", params, Map.class).getBody();
        return result;
    }

    public Map save(@RequestParam LinkedMultiValueMap params) {
        Map result = client.postForEntity(SERVER_ID, "/sso/resource/authorization/user/save", params, Map.class).getBody();
        return result;
    }


    public Map deletes(@RequestParam LinkedMultiValueMap params) {
        Map result = client.postForEntity(SERVER_ID, "/sso/resource/authorization/user/deletes", params, Map.class).getBody();
        return result;
    }

    public LinkedHashMap getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && OAuth2Authentication.class.isAssignableFrom(authentication.getClass())) {
            OAuth2Authentication oa = (OAuth2Authentication) SecurityContextHolder.getContext().getAuthentication();
            LinkedHashMap details = (LinkedHashMap) oa.getUserAuthentication().getDetails();
            LinkedHashMap principal = (LinkedHashMap) details.get("principal");

            return principal;
        }
        return null;
    }

}
