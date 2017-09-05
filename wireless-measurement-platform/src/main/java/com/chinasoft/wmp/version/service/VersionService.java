package com.chinasoft.wmp.version.service;

import com.chinasoft.wireless.measurement.platform.management.configuration.FeignClientsConfigurationCustom;
import com.chinasoft.wmp.version.model.PageParam;
import com.chinasoft.wmp.version.model.Version;
import com.mouse.web.supports.mvc.bind.annotation.MapParam;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;

@FeignClient(name = "version-services", configuration = FeignClientsConfigurationCustom.class)
public interface VersionService {
    @RequestMapping("/version/query1")
    Page<Version> query(@MapParam Map<String, Object> params);
}
