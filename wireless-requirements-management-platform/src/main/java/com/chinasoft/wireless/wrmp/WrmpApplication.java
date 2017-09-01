package com.chinasoft.wireless.wrmp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
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
