package com.chinasoft.wireless.wmp.chartconfiguration.controller;

import com.chinasoft.wireless.wmp.chartconfiguration.model.Axis;
import com.chinasoft.wireless.wmp.chartconfiguration.model.ChartConfiguration;
import com.chinasoft.wireless.wmp.chartconfiguration.service.IAxisService;
import com.chinasoft.wireless.wmp.chartconfiguration.service.IChartConfigurationService;
import com.mouse.web.supports.jpa.controller.BaseController;
import com.mouse.web.supports.jpa.service.IBaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/chart_configuration")
public class ChartConfigurationController extends BaseController<ChartConfiguration, String> {
    @Autowired
    private IChartConfigurationService chartConfigurationService;

    @Override
    protected IBaseService<ChartConfiguration, String> getService() {
        return chartConfigurationService;
    }
}
