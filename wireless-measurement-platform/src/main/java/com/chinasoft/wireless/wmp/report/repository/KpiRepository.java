package com.chinasoft.wireless.wmp.report.repository;

import com.chinasoft.wireless.wmp.report.model.Kpi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KpiRepository extends JpaRepository<Kpi, String> {
}
