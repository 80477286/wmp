package com.chinasoft.wireless.wmp.vm.version.service;

import com.chinasoft.wireless.utils.MicroServiceClient;
import com.netflix.discovery.converters.Auto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;

@Service
public class VersionService {
    private static final String SERVER_ID = "version-services";
    @Autowired
    private MicroServiceClient client;

    public Map query(@RequestParam LinkedMultiValueMap params) {
        Map result = client.postForEntity(SERVER_ID, "/vm/version/query", params);
        return result;
    }

    public Map getById(@RequestParam LinkedMultiValueMap params) {
        Map result = client.postForEntity(SERVER_ID, "/vm/version/get_by_id", params);
        return result;
    }

    public Map save(@RequestParam LinkedMultiValueMap params) {
        Map result = client.postForEntity(SERVER_ID, "/vm/version/save", params);
        return result;
    }


    public Map deletes(@RequestParam LinkedMultiValueMap params) {
        Map result = client.postForEntity(SERVER_ID, "/vm/version/deletes", params);
        return result;
    }


}
