package com.chinasoft.wireless.wmp.report.service;

import com.chinasoft.wireless.wmp.report.model.Report;
import com.mouse.web.supports.jpa.service.IBaseService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Map;

public interface IReportService extends IBaseService<Report, String> {

    Map<String, Object> queryIterationReport(String projectId, String reportConfigurationType, final Pageable pageable);

    Map<String, Object> queryReport(Map<String, Object> params, Pageable pageable);
}
