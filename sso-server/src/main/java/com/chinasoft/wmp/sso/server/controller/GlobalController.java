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
    @GetMapping("/login")
    public String login() {
        return "/login";
    }
}
