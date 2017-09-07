package com.chinasoft;

import com.mouse.web.supports.jpa.repository.RepositoryFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.GetMapping;

import java.security.Principal;

/**
 *
 */
@EnableEurekaClient
@SpringBootApplication
@EnableDiscoveryClient
@ComponentScan(basePackages = {"com.mouse", "com.chinasoft"})
@EnableJpaRepositories(basePackages = {"com.mouse", "com.chinasoft"}, repositoryFactoryBeanClass = RepositoryFactory.class)
public class WmpApplication {
    public static void main(String[] args) {
        SpringApplication.run(WmpApplication.class, args);
    }

    @GetMapping({"/index", "/"})
    public String index(Principal principal) {
        return "/index";
    }
}
