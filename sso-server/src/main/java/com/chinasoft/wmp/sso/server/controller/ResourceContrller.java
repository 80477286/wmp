package com.chinasoft.wmp.sso.server.controller;

import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.authentication.OAuth2AuthenticationDetails;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.LinkedHashMap;
import java.util.Map;

@RestController
public class ResourceContrller {
    @RequestMapping({"/me"})
    public Map<String, Object> me(Principal principal) {
        OAuth2Authentication oa = (OAuth2Authentication) principal;
        Map<String, Object> map = new LinkedHashMap<>();
        map.put("name", oa.getName());
        map.put("authorities", oa.getUserAuthentication().getAuthorities());
        map.put("details", oa.getDetails());
        return map;
    }
}
