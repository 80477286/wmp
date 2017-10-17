package com.chinasoft.wireless.wmp.reportconfiguration.controller;

import com.chinasoft.wireless.wmp.reportconfiguration.model.KpiConfiguration;
import com.chinasoft.wireless.wmp.reportconfiguration.service.IKpiConfigurationService;
import com.mouse.web.supports.jpa.controller.BaseController;
import com.mouse.web.supports.jpa.service.IBaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/kpi_configuration")
public class KpiConfigurationController extends BaseController<KpiConfiguration, String> {
    @Autowired
    private IKpiConfigurationService kpiConfigurationService;

    @Override
    protected IBaseService<KpiConfiguration, String> getService() {
        return kpiConfigurationService;
    }
}
