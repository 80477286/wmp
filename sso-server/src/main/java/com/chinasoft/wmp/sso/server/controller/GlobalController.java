package com.chinasoft.wmp.sso.server.controller;

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
    public Map<String, String> me(Principal principal) {
        Map<String, String> map = new LinkedHashMap<>();
        map.put("name", principal.getName());
        return map;
    }


    @GetMapping("/login")
    public String login() {
        return "/login";
    }
}
