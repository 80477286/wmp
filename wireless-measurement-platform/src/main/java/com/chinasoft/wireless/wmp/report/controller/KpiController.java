package com.chinasoft.wireless.wmp.report.controller;

import com.chinasoft.wireless.wmp.report.model.Kpi;
import com.chinasoft.wireless.wmp.report.service.IKpiService;
import com.chinasoft.wireless.wmp.report.service.KpiService;
import com.mouse.web.supports.jpa.controller.BaseController;
import com.mouse.web.supports.jpa.service.IBaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/kpi")
public class KpiController extends BaseController<Kpi, String> {
    @Autowired
    private IKpiService kpiService;

    @Override
    protected IBaseService<Kpi, String> getService() {
        return kpiService;
    }
}
