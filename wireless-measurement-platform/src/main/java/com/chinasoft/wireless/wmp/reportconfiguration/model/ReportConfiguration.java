package com.chinasoft.wireless.wmp.reportconfiguration.model;

import com.chinasoft.wireless.wmp.chartconfiguration.model.ChartConfiguration;
import com.mouse.web.supports.model.BaseEntity;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@DynamicUpdate(true)
@DynamicInsert(true)
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@Table(name = "[report_configuration]")
public class ReportConfiguration extends BaseEntity {

    /**
     * 报表类型
     */
    @Column(nullable = false, length = 128)
    private String type;
    @Column(nullable = false, length = 128)
    private String name;
    private String description;
    private String projectId;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "report_configuration_id")
    private List<KpiConfiguration> kpiConfigurations = new ArrayList<>();

    @OneToMany
    @JoinColumn(name = "report_configuration_id")
    private List<ChartConfiguration> chartConfigurations = new ArrayList<>();

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<KpiConfiguration> getKpiConfigurations() {
        return kpiConfigurations;
    }

    public void setKpiConfigurations(List<KpiConfiguration> kpiConfigurations) {
        this.kpiConfigurations = kpiConfigurations;
    }

    public String getProjectId() {
        return projectId;
    }

    public void setProjectId(String projectId) {
        this.projectId = projectId;
    }

    public List<ChartConfiguration> getChartConfigurations() {
        return chartConfigurations;
    }

    public void setChartConfigurations(List<ChartConfiguration> chartConfigurations) {
        this.chartConfigurations = chartConfigurations;
    }
}
