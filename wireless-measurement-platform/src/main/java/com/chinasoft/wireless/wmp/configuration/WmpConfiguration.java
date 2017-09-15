package com.chinasoft.wireless.wmp.configuration;

import com.mouse.web.supports.cloud.CloudResourceServiceClient;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class WmpConfiguration {


    @Bean
    @ConfigurationProperties("security.oauth2")
    public CloudResourceServiceClient versionClient() {
        return new CloudResourceServiceClient();
    }
}
