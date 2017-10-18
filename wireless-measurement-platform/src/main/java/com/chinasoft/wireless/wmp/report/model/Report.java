package com.chinasoft.wireless.wmp.report.model;

import com.chinasoft.wireless.wmp.reportconfiguration.model.ReportConfiguration;
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
@Table(name = "[report]")
public class Report extends BaseEntity {
    private String buId;
    private String duId;
    private String pduId;
    private String poId;
    private String projectId;

    /**
     * 迭代
     */
    private String iteration;

    /**
     * 分组名称
     */
    private String groupName;

    @OneToMany
    @JoinColumn(name = "report_id")
    private List<Kpi> kpis = new ArrayList<>();

    @OneToOne
    @JoinColumn(name = "report_configuration_id")
    private ReportConfiguration reportConfiguration;

    public String getBuId() {
        return buId;
    }

    public void setBuId(String buId) {
        this.buId = buId;
    }

    public String getDuId() {
        return duId;
    }

    public void setDuId(String duId) {
        this.duId = duId;
    }

    public String getPduId() {
        return pduId;
    }

    public void setPduId(String pduId) {
        this.pduId = pduId;
    }

    public String getPoId() {
        return poId;
    }

    public void setPoId(String poId) {
        this.poId = poId;
    }

    public String getProjectId() {
        return projectId;
    }

    public void setProjectId(String projectId) {
        this.projectId = projectId;
    }

    public String getIteration() {
        return iteration;
    }

    public void setIteration(String iteration) {
        this.iteration = iteration;
    }

    public List<Kpi> getKpis() {
        return kpis;
    }

    public void setKpis(List<Kpi> kpis) {
        this.kpis = kpis;
    }

    public ReportConfiguration getReportConfiguration() {
        return reportConfiguration;
    }

    public void setReportConfiguration(ReportConfiguration reportConfiguration) {
        this.reportConfiguration = reportConfiguration;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }
}
