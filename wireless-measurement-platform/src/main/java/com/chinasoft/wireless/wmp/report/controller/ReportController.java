package com.chinasoft.wireless.wmp.report.controller;

import com.chinasoft.wireless.wmp.report.model.Report;
import com.chinasoft.wireless.wmp.report.service.IReportService;
import com.mouse.web.supports.jpa.controller.BaseController;
import com.mouse.web.supports.jpa.service.IBaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/report")
public class ReportController extends BaseController<Report, String> {

    @Autowired
    private IReportService reportService;

    @Override
    protected IBaseService<Report, String> getService() {
        return reportService;
    }
}
