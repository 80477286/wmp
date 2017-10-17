package com.chinasoft.wireless.wmp.reportconfiguration.repository;

import com.chinasoft.wireless.wmp.reportconfiguration.model.KpiConfiguration;
import com.mouse.web.supports.jpa.repository.BaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KpiConfigurationRepository extends BaseRepository<KpiConfiguration, String> {
}
