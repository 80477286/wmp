package com.chinasoft.wmp.version.service;

import com.chinasoft.wmp.version.model.Version;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.authentication.OAuth2AuthenticationDetails;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.util.List;
import java.util.Map;

@Service
public class VersionService {
    @Autowired
    private DiscoveryClient client;

    public Map query(@RequestParam LinkedMultiValueMap params) {
        OAuth2RestTemplate rt;
        List<ServiceInstance> instances = client.getInstances("version-services");
        if (instances != null && !instances.isEmpty()) {
            ServiceInstance instance = instances.get(0);
            URI uri = instance.getUri();
            HttpHeaders headers = new HttpHeaders();

            OAuth2Authentication oAuth2Authentication = (OAuth2Authentication) SecurityContextHolder.getContext().getAuthentication();
            OAuth2AuthenticationDetails details = (OAuth2AuthenticationDetails) oAuth2Authentication.getDetails();
            String token = details.getTokenValue();
            String tokenType = details.getTokenType();
            headers.set("Authorization", tokenType + " " + token);
            headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
            HttpEntity entity = new HttpEntity(params, headers);
            Map result = (new RestTemplate()).postForEntity(uri.toString() + "/version/query", entity, Map.class).getBody();
            return result;
        }
        return null;
    }
}
