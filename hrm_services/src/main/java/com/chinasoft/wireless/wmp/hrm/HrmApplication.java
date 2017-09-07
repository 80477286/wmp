package com.chinasoft.wireless.wmp.hrm;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

/**
 * Created by cwx183898 on 2017/5/19.
 */
@SpringBootApplication
@EnableEurekaClient
public class HrmApplication {
    public static void main(String[] args) {
        SpringApplication.run(HrmApplication.class, args);
    }

}
