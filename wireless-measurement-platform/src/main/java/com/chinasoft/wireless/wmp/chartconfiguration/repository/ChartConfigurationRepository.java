package com.chinasoft.wireless.wmp.chartconfiguration.repository;

import com.chinasoft.wireless.wmp.chartconfiguration.model.ChartConfiguration;
import com.mouse.web.supports.jpa.repository.BaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChartConfigurationRepository extends BaseRepository<ChartConfiguration, String> {
}
