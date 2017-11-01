package com.chinasoft.wireless.wmp.reportconfiguration.controller;

import com.chinasoft.wireless.wmp.authorization.user.service.UserService;
import com.chinasoft.wireless.wmp.project.service.IProjectService;
import com.chinasoft.wireless.wmp.reportconfiguration.model.ReportConfiguration;
import com.chinasoft.wireless.wmp.reportconfiguration.service.IReportConfigurationService;
import com.mouse.web.supports.jpa.controller.BaseController;
import com.mouse.web.supports.jpa.service.IBaseService;
import com.mouse.web.supports.mvc.bind.annotation.EntityParam;
import com.mouse.web.supports.mvc.bind.annotation.JSON;
import com.mouse.web.supports.mvc.bind.annotation.MapParam;
import com.netflix.discovery.converters.Auto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

    @Autowired
    private UserService userService;

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
    @RequestMapping(value = "/project_report_configuration")
    public ReportConfiguration getProjectReportConfiguration(@MapParam Map<String, Object> params) {
        String pid = projectService.getUserCurrentProjectId();
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
}
