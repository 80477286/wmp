package com.huawei.wireless.wrmp;

import com.mouse.web.supports.jpa.repository.RepositoryFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by cwx183898 on 2017/8/8.
 */
@SpringBootApplication
@Controller
@EnableJpaRepositories(basePackages = "com.mouse", repositoryFactoryBeanClass = RepositoryFactory.class)
public class WrmpApplication {
    public static void main(String[] args) {
        SpringApplication.run(WrmpApplication.class, args);
    }

    @GetMapping({"/", "/index"})
    public String index() {
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
