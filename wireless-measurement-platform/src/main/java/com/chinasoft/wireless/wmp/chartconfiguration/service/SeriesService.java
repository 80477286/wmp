package com.chinasoft.wireless.wmp.chartconfiguration.service;

import com.chinasoft.wireless.wmp.chartconfiguration.model.Series;
import com.chinasoft.wireless.wmp.chartconfiguration.repository.SeriesRepository;
import com.mouse.web.supports.jpa.repository.BaseRepository;
import com.mouse.web.supports.jpa.service.BaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class SeriesService extends BaseService<Series, String> implements ISeriesService {
    @Autowired
    private SeriesRepository seriesRepository;

    @Override
    public BaseRepository<Series, String> getRepository() {
        return seriesRepository;
    }
}
