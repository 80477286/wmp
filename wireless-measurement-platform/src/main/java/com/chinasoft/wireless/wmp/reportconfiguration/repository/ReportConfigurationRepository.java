package com.chinasoft.wireless.wmp.reportconfiguration.repository;

import com.chinasoft.wireless.wmp.reportconfiguration.model.ReportConfiguration;
import com.mouse.web.supports.jpa.repository.BaseRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReportConfigurationRepository extends BaseRepository<ReportConfiguration, String> {
}
