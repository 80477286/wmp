package com.chinasoft.wireless.wmp.chartconfiguration.repository;

import com.chinasoft.wireless.wmp.chartconfiguration.model.Axis;
import com.mouse.web.supports.jpa.repository.BaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AxisRepository extends BaseRepository<Axis, String> {
}
