package com.chinasoft.wireless.wmp.reportconfiguration.controller;

import com.chinasoft.wireless.wmp.reportconfiguration.model.ReportConfiguration;
import com.chinasoft.wireless.wmp.reportconfiguration.service.IReportConfigurationService;
import com.mouse.web.supports.jpa.controller.BaseController;
import com.mouse.web.supports.jpa.service.IBaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/report_configuration")
public class ReportConfigurationController extends BaseController<ReportConfiguration, String> {
    @Autowired
    private IReportConfigurationService reportConfigurationService;

    @Override
    protected IBaseService<ReportConfiguration, String> getService() {
        return reportConfigurationService;
    }
}
