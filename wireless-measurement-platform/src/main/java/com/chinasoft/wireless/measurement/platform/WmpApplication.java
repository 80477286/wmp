package com.chinasoft.wireless.measurement.platform;

import com.mouse.web.supports.mvc.argumentsresolver.EntityParamMethodArgumentResolver;
import com.mouse.web.supports.mvc.argumentsresolver.MapParamMethodArgumentResolver;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.WebMvcRegistrationsAdapter;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

import java.util.List;

/**
 *
 */
@SpringBootApplication
@Controller
@EnableEurekaClient
public class WmpApplication {
    public static void main(String[] args) {
        SpringApplication.run(WmpApplication.class, args);
    }

    @GetMapping({"/index", "/"})
    public String login() {
        return "/index";
    }
}
