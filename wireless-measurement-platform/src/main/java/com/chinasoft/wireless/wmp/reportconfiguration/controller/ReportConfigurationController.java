package com.chinasoft.wireless.wmp.reportconfiguration.controller;

import com.chinasoft.wireless.wmp.project.service.IProjectService;
import com.chinasoft.wireless.wmp.reportconfiguration.model.ReportConfiguration;
import com.chinasoft.wireless.wmp.reportconfiguration.service.IReportConfigurationService;
import com.mouse.web.supports.jpa.controller.BaseController;
import com.mouse.web.supports.jpa.service.IBaseService;
import com.mouse.web.supports.mvc.bind.annotation.EntityParam;
import com.mouse.web.supports.mvc.bind.annotation.JSON;
import com.mouse.web.supports.mvc.bind.annotation.MapParam;
import com.mouse.web.supports.mvc.request.PageParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/report_configuration")
public class ReportConfigurationController extends BaseController<ReportConfiguration, String> {
    @Autowired
    private IReportConfigurationService reportConfigurationService;
    @Autowired
    private IProjectService projectService;

    @Override
    protected IBaseService<ReportConfiguration, String> getService() {
        return reportConfigurationService;
    }

    @Override
    @JSON()
    @RequestMapping(value = "/save")
    public ReportConfiguration save(@EntityParam ReportConfiguration reportConfiguration) {
        ReportConfiguration result = getService().save(reportConfiguration);
        return result;
    }

    @JSON()
    @RequestMapping(value = "/get_report_configuration")
    public ReportConfiguration getProjectReportConfiguration(String projectId, String type) {
        Map<String, Object> params = new HashMap<String, Object>(0);
        params.put("projectId_eq", projectId);
        params.put("type_eq", type);

        Page<ReportConfiguration> result = reportConfigurationService.query(params, null);
        if (result.getContent().isEmpty()) {
            params.remove("projectId_eq");
            result = reportConfigurationService.query(params, null);
        }
        if (!result.getContent().isEmpty()) {
            return result.getContent().get(0);
        } else {
            return null;
        }
    }


    @RequestMapping(value = "/convert_to_private")
    public ReportConfiguration convertToPrivate(String pid, String id) {
        ReportConfiguration coped = reportConfigurationService.copy(pid, id);
        return coped;
    }

    @JSON(excludeProperties = {"data.*\\.kpiConfigurations", "data.*\\.chartConfigurations"})
    @RequestMapping(value = "/query_simple")
    public Page<ReportConfiguration> querySimple(@MapParam Map<String, Object> params, @EntityParam PageParam pageable) {
        return getService().query(params, pageable);
    }


    @JSON(excludeProperties = {"data.*\\.kpiConfigurations", "data.*\\.chartConfigurations"})
    @RequestMapping(value = "/query_simple_by_project")
    public List<ReportConfiguration> querySimpleByProject(@MapParam Map<String, Object> params, @EntityParam PageParam pageable) {
        List<ReportConfiguration> list = new ArrayList<ReportConfiguration>(0);
        Page<ReportConfiguration> commons = getService().query(params, pageable);
        List<String> keys = new ArrayList<String>(0);
        if (commons.hasContent()) {
            for (ReportConfiguration rc : commons.getContent()) {
                keys.add(rc.getType());
                list.add(rc);
            }
        }
        if (params.containsKey("projectId")) {
            params.remove("projectId");
            if (commons.hasContent()) {
                for (ReportConfiguration rc : commons.getContent()) {
                    params.put("projectId_isnull", "");
                }
            }
            Page<ReportConfiguration> all = getService().query(params, pageable);

            if (all.hasContent()) {
                for (ReportConfiguration rc : all.getContent()) {
                    if (!keys.contains(rc.getType())) {
                        list.add(rc);
                    }
                }
            }
        }
        return list;
    }
}
