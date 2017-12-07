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
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

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
    public LinkedHashMap<String, Object> queryIterationReport(String projectId, String reportConfigurationType, final Pageable pageable) {

        LinkedHashMap<String, Object> result = new LinkedHashMap<String, Object>(0);

        LinkedHashMap<String, Object> params = new LinkedHashMap<String, Object>(0);
        params.put("project.id", projectId);
        params.put("reportConfigurationType", reportConfigurationType);

        List<LinkedHashMap<String, Object>> datas = getReportData(params, pageable);
        result.put("data", datas);
        result.put("total", datas.size());


        params = new LinkedHashMap<String, Object>(0);
        params.put("projectId_eq", projectId);
        params.put("type_eq", reportConfigurationType);
        Page<ReportConfiguration> rc = reportConfigurationService.query(params, null);
        if (rc.getContent().isEmpty()) {
            params.remove("projectId_eq");
            rc = reportConfigurationService.query(params, null);
        }
        if (!rc.getContent().isEmpty()) {
            result.put("reportConfiguration", rc.getContent().get(0));
        }
        result.put("success", true);
        return result;
    }

    @Override
    public LinkedHashMap<String, Object> queryReport(Map<String, Object> params, final Pageable pageable) {
        LinkedHashMap<String, Object> result = new LinkedHashMap<String, Object>(0);
        List<LinkedHashMap<String, Object>> datas = getReportData(params, pageable);
        result.put("data", datas);
        result.put("total", datas.size());

        String rct = (String) params.get("reportConfigurationType");
        ReportConfiguration rc = getReportConfiguration(rct);

        result.put("reportConfiguration", rc);
        result.put("success", true);
        return result;
    }

    private ReportConfiguration getReportConfiguration(String rct) {
        Map<String, Object> params = new HashMap<String, Object>(0);
        params.put("type_eq", rct);
        params.put("projectId_isnull", "");
        Page<ReportConfiguration> result = reportConfigurationService.query(params, null);
        if (result.hasContent()) {
            return result.getContent().get(0);
        }
        return null;
    }

    @Override
    public List<LinkedHashMap<String, Object>> getReportData(Map<String, Object> params, final Pageable pageable) {
        List<LinkedHashMap<String, Object>> datas = new ArrayList<LinkedHashMap<String, Object>>(0);
        Page<Report> page = query(params, pageable);
        List<Report> reports = page.getContent();
        if (reports != null && reports.size() > 0) {
            for (Report report : reports) {
                LinkedHashMap<String, Object> line = new LinkedHashMap<String, Object>(0);
                for (Kpi kpi : report.getKpis()) {
                    line.put(kpi.getField(), kpi.getValue());
                }
                datas.add(line);
            }
        }
        return datas;
    }
}
