package com.chinasoft.wmp.version.controller;

import com.chinasoft.wmp.version.model.PageParam;
import com.chinasoft.wmp.version.model.Version;
import com.chinasoft.wmp.version.service.VersionService;
import com.mouse.web.supports.mvc.bind.annotation.MapParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

@RestController
public class VersionController {

    @Autowired
    private VersionService versionService;


    @RequestMapping(value = "/version/query", method = RequestMethod.POST)
    public Page<Version> getAllEmployees(@MapParam Map<String, Object> params) {
        Map<String, Object> np = new HashMap<>();
        Set<Map.Entry<String, Object>> entries = params.entrySet();
        for (Map.Entry<String, Object> entry : entries) {
            np.put("params." + entry.getKey(), entry.getValue());
        }
        return versionService.query(np);
    }
}
