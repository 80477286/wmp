package com.chinasoft.wireless.wmp.chartconfiguration.controller;

import com.chinasoft.wireless.wmp.chartconfiguration.model.Axis;
import com.chinasoft.wireless.wmp.chartconfiguration.service.IAxisService;
import com.mouse.web.supports.jpa.controller.BaseController;
import com.mouse.web.supports.jpa.service.IBaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/axis")
public class AxisController extends BaseController<Axis, String> {
    @Autowired
    private IAxisService axisService;

    @Override
    protected IBaseService<Axis, String> getService() {
        return axisService;
    }
}
