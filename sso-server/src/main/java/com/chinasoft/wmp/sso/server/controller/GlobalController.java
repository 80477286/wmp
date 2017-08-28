package com.chinasoft.wmp.sso.server.controller;

import com.mouse.web.authorization.local.user.model.User;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.LinkedHashMap;
import java.util.Map;

@Controller
public class GlobalController {


    @GetMapping("/")
    public String index() {
        return "/index";
    }

    @RequestMapping({"/me"})
    @ResponseBody
    public Map<String, Object> me(Principal principal) {
        OAuth2Authentication oa = (OAuth2Authentication) principal;
        Map<String, Object> map = new LinkedHashMap<>();
        map.put("name", oa.getName());
        map.put("principal", oa.getUserAuthentication().getPrincipal());
        return map;
    }


    @GetMapping("/login")
    public String login() {
        return "/login";
    }
}
