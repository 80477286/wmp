package com.chinasoft.wireless.wmp.chartconfiguration.service;

import com.chinasoft.wireless.wmp.chartconfiguration.model.Axis;
import com.chinasoft.wireless.wmp.chartconfiguration.repository.AxisRepository;
import com.mouse.web.supports.jpa.repository.BaseRepository;
import com.mouse.web.supports.jpa.service.BaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class AxisService extends BaseService<Axis, String> implements IAxisService {
    @Autowired
    private AxisRepository axisRepository;

    @Override
    public BaseRepository<Axis, String> getRepository() {
        return axisRepository;
    }
}
