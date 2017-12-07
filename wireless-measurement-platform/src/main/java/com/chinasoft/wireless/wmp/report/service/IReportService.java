package com.chinasoft.wireless.wmp.report.service;

import com.chinasoft.wireless.wmp.report.model.Report;
import com.mouse.web.supports.jpa.service.IBaseService;
import org.springframework.data.domain.Pageable;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public interface IReportService extends IBaseService<Report, String> {

    LinkedHashMap<String, Object> queryIterationReport(String projectId, String reportConfigurationType, final Pageable pageable);

    LinkedHashMap<String, Object> queryReport(Map<String, Object> params, Pageable pageable);

    List<LinkedHashMap<String, Object>> getReportData(Map<String, Object> params, Pageable pageable);
}
