package com.chinasoft.wireless.wmp.reportconfiguration.service;

import com.chinasoft.wireless.wmp.reportconfiguration.model.KpiConfiguration;
import com.chinasoft.wireless.wmp.reportconfiguration.repository.KpiConfigurationRepository;
import com.mouse.web.supports.jpa.repository.BaseRepository;
import com.mouse.web.supports.jpa.service.BaseService;
import com.mouse.web.supports.jpa.service.IBaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class KpiConfigurationService extends BaseService<KpiConfiguration, String> implements IKpiConfigurationService {
    @Autowired
    private KpiConfigurationRepository kpiConfigurationRepository;

    @Override
    public BaseRepository<KpiConfiguration, String> getRepository() {
        return kpiConfigurationRepository;
    }
}
