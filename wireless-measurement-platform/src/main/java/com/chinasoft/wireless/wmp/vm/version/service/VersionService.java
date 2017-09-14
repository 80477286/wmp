package com.chinasoft.wireless.wmp.vm.version.service;


import com.chinasoft.wireless.security.oauth2.client.ResourceClient;
import com.mouse.web.supports.cloud.CloudServiceClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.bind.annotation.RequestParam;

import javax.annotation.Resource;
import java.util.Map;

@SuppressWarnings("ALL")
@Service
public class VersionService {
    private static final String SERVER_ID = "version-services";
    @Autowired
    @Qualifier("versionClient")
    private ResourceClient client;

    public Map query(@RequestParam LinkedMultiValueMap params) {
        Map result = client.postForEntity(SERVER_ID, "/vm/version/query", params, Map.class).getBody();
        return result;
    }

    public Map getById(@RequestParam LinkedMultiValueMap params) {
        Map result = client.postForEntity(SERVER_ID, "/vm/version/get_by_id", params, Map.class).getBody();
        return result;
    }

    public Map save(@RequestParam LinkedMultiValueMap params) {
        Map result = client.postForEntity(SERVER_ID, "/vm/version/save", params, Map.class).getBody();
        return result;
    }


    public Map deletes(@RequestParam LinkedMultiValueMap params) {
        Map result = client.postForEntity(SERVER_ID, "/vm/version/deletes", params, Map.class).getBody();
        return result;
    }

    @Bean
    @ConfigurationProperties("security.version")
    public ResourceClient versionClient() {
        return new ResourceClient();
    }
}
