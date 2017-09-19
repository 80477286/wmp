package com.chinasoft.wireless.wmp.configuration;

import com.google.common.base.Strings;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.FormHttpMessageConverter;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.authentication.OAuth2AuthenticationDetails;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;

@Service
public class SSOLogoutHandler implements LogoutHandler {
    protected static final Logger LOGGER = Logger
            .getLogger(SSOLogoutHandler.class);
    @Value("${security.oauth2.client.logout-uri}")
    private String logoutUri = null;

    @Override
    public void logout(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Authentication authentication) {

        LOGGER.debug("executing MySsoLogoutHandler.logout");
        Object details = authentication.getDetails();
        if (logoutUri != null && details.getClass().isAssignableFrom(OAuth2AuthenticationDetails.class)) {
            OAuth2Authentication oa = (OAuth2Authentication) SecurityContextHolder.getContext().getAuthentication();
            LinkedHashMap ssoDetails = (LinkedHashMap) ((LinkedHashMap) oa.getUserAuthentication().getDetails()).get("details");

            RestTemplate restTemplate = new RestTemplate();
            String jsessionid = (String) ssoDetails.get("sessionId");
            List<String> cookies = new ArrayList<String>(0);
            HttpHeaders headers = new HttpHeaders();
            cookies.add("JSESSIONID=" + Strings.nullToEmpty(jsessionid));
            headers.put(HttpHeaders.COOKIE, cookies);

            HttpEntity<String> request = new HttpEntity(headers);

            HttpMessageConverter formHttpMessageConverter = new FormHttpMessageConverter();
            HttpMessageConverter stringHttpMessageConverternew = new StringHttpMessageConverter();
            restTemplate.setMessageConverters(Arrays.asList(new HttpMessageConverter[]{formHttpMessageConverter, stringHttpMessageConverternew}));
            try {
                ResponseEntity<String> response = restTemplate.exchange(logoutUri, HttpMethod.POST, request, String.class);
            } catch (HttpClientErrorException e) {
                e.printStackTrace();
            }
        }

    }

}
