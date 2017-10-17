package com.chinasoft.wireless.wmp.reportconfiguration.repository;

import com.chinasoft.wireless.wmp.reportconfiguration.model.KpiConfiguration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KpiConfigurationRepository extends JpaRepository<KpiConfiguration, String> {
}
