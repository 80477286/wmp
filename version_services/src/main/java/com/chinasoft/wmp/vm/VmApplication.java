package com.chinasoft.wmp.vm;

import com.mouse.web.supports.jpa.repository.RepositoryFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * Created by cwx183898 on 2017/5/19.
 */
@SpringBootApplication
@EnableEurekaClient
@EnableJpaRepositories(basePackages = {"com.mouse", "com.chinasoft.wmp"}, repositoryFactoryBeanClass = RepositoryFactory.class)
@ComponentScan(basePackages = {"com.mouse", "com.chinasoft.wmp"})
public class VmApplication {
    public static void main(String[] args) {
        SpringApplication.run(VmApplication.class, args);
    }

}
