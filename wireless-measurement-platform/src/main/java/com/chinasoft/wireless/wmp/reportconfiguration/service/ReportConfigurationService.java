package com.chinasoft.wireless.wmp.reportconfiguration.service;

import com.chinasoft.wireless.wmp.authorization.user.service.UserService;
import com.chinasoft.wireless.wmp.chartconfiguration.model.Axis;
import com.chinasoft.wireless.wmp.chartconfiguration.model.ChartConfiguration;
import com.chinasoft.wireless.wmp.chartconfiguration.model.Series;
import com.chinasoft.wireless.wmp.reportconfiguration.model.KpiConfiguration;
import com.chinasoft.wireless.wmp.reportconfiguration.model.ReportConfiguration;
import com.chinasoft.wireless.wmp.reportconfiguration.repository.ReportConfigurationRepository;
import com.mouse.web.supports.jpa.repository.BaseRepository;
import com.mouse.web.supports.jpa.service.BaseService;
import org.hibernate.internal.util.SerializationHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

@Transactional
@Service
public class ReportConfigurationService extends BaseService<ReportConfiguration, String> implements IReportConfigurationService {

    @Autowired
    private ReportConfigurationRepository reportConfigurationRepository;

    @Autowired
    private UserService userService;

    @Override
    public BaseRepository<ReportConfiguration, String> getRepository() {
        return reportConfigurationRepository;
    }

    @Override
    public ReportConfiguration copy(String pid, String id) {
        ReportConfiguration old = reportConfigurationRepository.findOne(id);
        ReportConfiguration coped = (ReportConfiguration) SerializationHelper.clone(old);
        String username = (String) (userService.getCurrentUser().get("username"));
        coped.setCreator(username);
        coped.setProjectId(pid);
        coped.setId(null);
        coped.setChartConfigurations(new ArrayList<ChartConfiguration>(0));
        coped.setKpiConfigurations(new ArrayList<KpiConfiguration>(0));

        if (old.getChartConfigurations() != null && !old.getChartConfigurations().isEmpty()) {
            for (ChartConfiguration cc : old.getChartConfigurations()) {
                ChartConfiguration item = (ChartConfiguration) SerializationHelper.clone(cc);
                item.setId(null);
                coped.getChartConfigurations().add(item);

                item.setAxes(new ArrayList<Axis>(0));
                item.setSeries(new ArrayList<Series>(0));
                if (cc.getSeries() != null) {
                    for (Series series : cc.getSeries()) {
                        Series ts = (Series) SerializationHelper.clone(series);
                        ts.setId(null);
                        item.getSeries().add(ts);
                    }
                }
                if (cc.getAxes() != null) {
                    for (Axis axis : cc.getAxes()) {
                        Axis ta = (Axis) SerializationHelper.clone(axis);
                        ta.setId(null);
                        item.getAxes().add(ta);
                    }
                }
            }
        }
        if (old.getKpiConfigurations() != null && !old.getKpiConfigurations().isEmpty()) {
            for (KpiConfiguration cc : old.getKpiConfigurations()) {
                KpiConfiguration item = (KpiConfiguration) SerializationHelper.clone(cc);
                item.setId(null);
                coped.getKpiConfigurations().add(item);
            }
        }
        return getRepository().save(coped);
    }
}
