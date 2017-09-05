package com.chinasoft.wireless.measurement.platform.management.configuration;

import feign.RequestInterceptor;
import feign.RequestTemplate;
import org.springframework.cloud.netflix.zuul.util.RequestUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.authentication.OAuth2AuthenticationDetails;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.util.Enumeration;

@Configuration
public class FeignClientsConfigurationCustom {
    @Bean
    public RequestInterceptor headerInterceptor() {
        return new RequestInterceptor() {
            @Override
            public void apply(RequestTemplate requestTemplate) {
                ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder
                        .getRequestAttributes();
                HttpServletRequest request = attributes.getRequest();
                Enumeration<String> headerNames = request.getHeaderNames();
                if (headerNames != null) {
                    while (headerNames.hasMoreElements()) {
                        String name = headerNames.nextElement();
                        Enumeration<String> values = request.getHeaders(name);
                        while (values.hasMoreElements()) {
                            String value = values.nextElement();
                            requestTemplate.header(name, value);
                        }
                    }
                }
                OAuth2Authentication oAuth2Authentication = (OAuth2Authentication) SecurityContextHolder.getContext().getAuthentication();
                if (oAuth2Authentication == null) {
                    return;
                }
                requestTemplate.method("POST");
                OAuth2AuthenticationDetails details = (OAuth2AuthenticationDetails) oAuth2Authentication.getDetails();
                String token = details.getTokenValue();
                String tokenType = details.getTokenType();
                requestTemplate.header("Authorization", tokenType + " " + token);
            }
        };
    }
}
