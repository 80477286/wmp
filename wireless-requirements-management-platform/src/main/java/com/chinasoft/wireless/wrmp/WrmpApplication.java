package com.chinasoft.wireless.wrmp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.authentication.OAuth2AuthenticationDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.security.Principal;

/**
 * Created by cwx183898 on 2017/8/8.
 */
@SpringBootApplication
@Controller
public class WrmpApplication {
    public static void main(String[] args) {
        SpringApplication.run(WrmpApplication.class, args);
    }

    @GetMapping({"/", "/index"})
    public String index(Principal principal) {
        if (principal != null) {
            if (principal instanceof OAuth2Authentication) {
                OAuth2Authentication oa = (OAuth2Authentication) principal;
                System.out.println(((OAuth2AuthenticationDetails) oa.getDetails()).getTokenValue());
            }
        }
        return "/index";
    }

    @GetMapping("/admin")
    public String admin() {
        return "/admin";
    }

    @GetMapping("/user")
    public String user() {
        return "/user";
    }

    @GetMapping("/about")
    public String about() {
        return "/about";
    }

    @GetMapping("/login")
    public String login() {
        return "/login";
    }

    @GetMapping("/error/403")
    public String error403() {
        return "/error/403";
    }
}
