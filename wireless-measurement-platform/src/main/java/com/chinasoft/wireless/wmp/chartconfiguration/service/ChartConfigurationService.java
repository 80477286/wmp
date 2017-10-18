package com.chinasoft.wireless.wmp.chartconfiguration.service;

import com.chinasoft.wireless.wmp.chartconfiguration.model.ChartConfiguration;
import com.chinasoft.wireless.wmp.chartconfiguration.repository.ChartConfigurationRepository;
import com.mouse.web.supports.jpa.repository.BaseRepository;
import com.mouse.web.supports.jpa.service.BaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ChartConfigurationService extends BaseService<ChartConfiguration, String> implements IChartConfigurationService {

    @Autowired
    private ChartConfigurationRepository chartConfigurationRepository;

    @Override
    public BaseRepository<ChartConfiguration, String> getRepository() {
        return chartConfigurationRepository;
    }
}
