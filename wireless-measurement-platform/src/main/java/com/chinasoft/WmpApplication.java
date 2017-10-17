package com.chinasoft;

import com.mouse.web.supports.jpa.repository.ExtendRepositoryFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.authentication.encoding.Md5PasswordEncoder;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableOAuth2Client;
import org.springframework.web.bind.annotation.GetMapping;

import java.security.Principal;

/**
 *
 */

//@EnableEurekaClient
@SpringBootApplication
@EnableDiscoveryClient
@EnableJpaRepositories(basePackages = {"com.chinasoft.wireless.wmp"}, repositoryFactoryBeanClass = ExtendRepositoryFactory.class)
public class WmpApplication {
    public static void main(String[] args) {
        SpringApplication.run(WmpApplication.class, args);
    }

    @GetMapping({"/index", "/"})
    public String index(Principal principal) {
        return "/index";
    }
}
