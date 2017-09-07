package com.chinasoft.wireless.wmp.hrm.config;

import com.mouse.web.supports.jpa.repository.ExtendRepositoryFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.provider.token.RemoteTokenServices;

@Configuration
@EnableResourceServer
@EnableJpaRepositories(basePackages = {"com.chinasoft.wireless.wmp"}, repositoryFactoryBeanClass = ExtendRepositoryFactory.class)
public class ResourceServerConfiguration extends ResourceServerConfigurerAdapter {

    @Value("${security.oauth2.check.check-token-uri}")
    private String checkTokenUri;

    @Value("${security.oauth2.check.client-id}")
    private String clientId;

    @Value("${security.oauth2.check.client-secret}")
    private String clientSecret;

    // 方式一：调用远程Auth server进行token校验
    @Bean
    public RemoteTokenServices remoteTokenServices() {
        RemoteTokenServices remoteTokenServices = new RemoteTokenServices();
        remoteTokenServices.setCheckTokenEndpointUrl(checkTokenUri);
        remoteTokenServices.setClientId(clientId);
        remoteTokenServices.setClientSecret(clientSecret);
        return remoteTokenServices;
    }

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.antMatcher("/**").authorizeRequests().anyRequest().authenticated();
    }
}
