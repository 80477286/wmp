package com.chinasoft.wireless.wmp.chartconfiguration.controller;

import com.chinasoft.wireless.wmp.chartconfiguration.model.Axis;
import com.chinasoft.wireless.wmp.chartconfiguration.model.Series;
import com.chinasoft.wireless.wmp.chartconfiguration.service.IAxisService;
import com.chinasoft.wireless.wmp.chartconfiguration.service.ISeriesService;
import com.mouse.web.supports.jpa.controller.BaseController;
import com.mouse.web.supports.jpa.service.IBaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/series")
public class SeriesController extends BaseController<Series, String> {
    @Autowired
    private ISeriesService seriesService;

    @Override
    protected IBaseService<Series, String> getService() {
        return seriesService;
    }
}
