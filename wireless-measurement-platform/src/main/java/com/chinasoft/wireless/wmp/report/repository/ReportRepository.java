package com.chinasoft.wireless.wmp.report.repository;

import com.chinasoft.wireless.wmp.report.model.Report;
import com.mouse.web.supports.jpa.repository.BaseRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReportRepository extends BaseRepository<Report, String> {
}
