package com.chinasoft.wireless.wmp.report.service;

import com.chinasoft.wireless.wmp.report.model.Kpi;
import com.chinasoft.wireless.wmp.report.model.Report;
import com.chinasoft.wireless.wmp.report.repository.ReportRepository;
import com.chinasoft.wireless.wmp.reportconfiguration.model.ReportConfiguration;
import com.chinasoft.wireless.wmp.reportconfiguration.service.ReportConfigurationService;
import com.mouse.web.supports.jpa.repository.BaseRepository;
import com.mouse.web.supports.jpa.service.BaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Transactional
public class ReportService extends BaseService<Report, String> implements IReportService {
    @Autowired
    private ReportRepository reportRepository;
    @Autowired
    private ReportConfigurationService reportConfigurationService;


    @Override
    public BaseRepository<Report, String> getRepository() {
        return reportRepository;
    }

    /**
     * @param projectId
     * @param reportConfigurationType
     * @param pageable
     * @return
     */
    @Override
    public Map<String, Object> queryIterationReport(String projectId, String reportConfigurationType, final Pageable pageable) {
        Map<String, Object> params = new HashMap<String, Object>(0);
        params.put("project.id", projectId);
        params.put("reportConfigurationType", reportConfigurationType);
        Map<String, Object> data = queryReport(params, pageable);

        params = new HashMap<String, Object>(0);
        params.put("projectId_eq", projectId);
        params.put("type_eq", reportConfigurationType);
        Page<ReportConfiguration> result = reportConfigurationService.query(params, null);
        if (result.getContent().isEmpty()) {
            params.remove("projectId_eq");
            result = reportConfigurationService.query(params, null);
        }
        if (!result.getContent().isEmpty()) {
            data.put("reportConfiguration", result.getContent().get(0));
        }
        data.put("success", true);
        return data;
    }

    @Override
    public Map<String, Object> queryReport(Map<String, Object> params, final Pageable pageable) {
        Map<String, Object> result = new HashMap<String, Object>(0);
        Page<Report> page = query(params, null);
        List<Report> reports = page.getContent();
        if (reports != null && reports.size() > 0) {
            List<Map<String, Object>> datas = new ArrayList<Map<String, Object>>(0);
            for (Report report : reports) {
                Map<String, Object> line = new HashMap<String, Object>(0);
                for (Kpi kpi : report.getKpis()) {
                    line.put(kpi.getField(), kpi.getValue());
                }
                datas.add(line);
            }
            result.put("data", datas);
            result.put("total", page.getSize());
        }
        return result;
    }
}
