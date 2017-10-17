package com.chinasoft.wireless.wmp.reportconfiguration.service;

import com.chinasoft.wireless.wmp.reportconfiguration.model.ReportConfiguration;
import com.chinasoft.wireless.wmp.reportconfiguration.repository.ReportConfigurationRepository;
import com.mouse.web.supports.jpa.repository.BaseRepository;
import com.mouse.web.supports.jpa.service.BaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class ReportConfigurationService extends BaseService<ReportConfiguration, String> implements IReportConfigurationService {

    @Autowired
    private ReportConfigurationRepository reportConfigurationRepository;

    @Override
    public BaseRepository<ReportConfiguration, String> getRepository() {
        return reportConfigurationRepository;
    }
}
