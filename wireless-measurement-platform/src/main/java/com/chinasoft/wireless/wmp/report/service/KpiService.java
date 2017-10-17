package com.chinasoft.wireless.wmp.report.service;

import com.chinasoft.wireless.wmp.report.model.Kpi;
import com.chinasoft.wireless.wmp.report.repository.KpiRepository;
import com.mouse.web.supports.jpa.repository.BaseRepository;
import com.mouse.web.supports.jpa.service.BaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class KpiService extends BaseService<Kpi, String> implements IKpiService {
    @Autowired
    private KpiRepository kpiRepository;

    @Override
    public BaseRepository<Kpi, String> getRepository() {
        return kpiRepository;
    }
}
