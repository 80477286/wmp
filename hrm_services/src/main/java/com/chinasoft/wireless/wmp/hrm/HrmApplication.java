package com.chinasoft.wireless.wmp.hrm;

import com.mouse.web.supports.jpa.repository.ExtendRepositoryFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * Created by cwx183898 on 2017/5/19.
 */
@SpringBootApplication
@EnableEurekaClient
@EnableJpaRepositories(basePackages = {"com.chinasoft.wireless.wmp"}, repositoryFactoryBeanClass = ExtendRepositoryFactory.class)
public class HrmApplication {
    public static void main(String[] args) {
        SpringApplication.run(HrmApplication.class, args);
    }
}
