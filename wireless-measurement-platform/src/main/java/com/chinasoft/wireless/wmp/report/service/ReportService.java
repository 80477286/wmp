package com.chinasoft.wireless.wmp.report.service;

import com.chinasoft.wireless.wmp.report.model.Report;
import com.chinasoft.wireless.wmp.report.repository.ReportRepository;
import com.mouse.web.supports.jpa.repository.BaseRepository;
import com.mouse.web.supports.jpa.service.BaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ReportService extends BaseService<Report, String> implements IReportService {
    @Autowired
    private ReportRepository reportRepository;

    @Override
    public BaseRepository<Report, String> getRepository() {
        return reportRepository;
    }
}
