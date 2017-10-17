package com.chinasoft.wireless.wmp.reportconfiguration.model;

import com.mouse.web.supports.model.BaseEntity;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@DynamicUpdate(true)
@DynamicInsert(true)
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@Table(name = "[report_configuration]")
public class ReportConfiguration extends BaseEntity {
    private String type;
    private String name;
    private String description;

    @OneToMany()
    @JoinColumn(name = "report_configuration_id")
    private List<KpiConfiguration> kpiConfigurations = new ArrayList<>();

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
}
