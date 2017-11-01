package com.chinasoft.wireless.wmp.report.model;

import com.chinasoft.wireless.wmp.iteration.model.Iteration;
import com.chinasoft.wireless.wmp.organization.model.Organization;
import com.chinasoft.wireless.wmp.project.model.Project;
import com.chinasoft.wireless.wmp.projectorder.model.ProjectOrder;
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
    @ManyToOne()
    @JoinColumn(name = "bu_id")
    private Organization bu;
    @ManyToOne()
    @JoinColumn(name = "du_id")
    private Organization du;
    @ManyToOne()
    @JoinColumn(name = "pdu_id")
    private Organization pdu;
    @ManyToOne()
    @JoinColumn(name = "po_id")
    private ProjectOrder projectOrder;
    @ManyToOne()
    @JoinColumn(name = "project_id")
    private Project project;
    @ManyToOne()
    @JoinColumn(name = "iteration_id")
    private Iteration iteration;

    private String reportConfigurationType;

    private String groupName;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "report_id")
    private List<Kpi> kpis = new ArrayList<>();

    public Organization getBu() {
        return bu;
    }

    public void setBu(Organization bu) {
        this.bu = bu;
    }

    public Organization getDu() {
        return du;
    }

    public void setDu(Organization du) {
        this.du = du;
    }

    public Organization getPdu() {
        return pdu;
    }

    public void setPdu(Organization pdu) {
        this.pdu = pdu;
    }

    public ProjectOrder getProjectOrder() {
        return projectOrder;
    }

    public void setProjectOrder(ProjectOrder projectOrder) {
        this.projectOrder = projectOrder;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public Iteration getIteration() {
        return iteration;
    }

    public void setIteration(Iteration iteration) {
        this.iteration = iteration;
    }

    public String getReportConfigurationType() {
        return reportConfigurationType;
    }

    public void setReportConfigurationType(String reportConfigurationType) {
        reportConfigurationType = reportConfigurationType;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public List<Kpi> getKpis() {
        return kpis;
    }

    public void setKpis(List<Kpi> kpis) {
        this.kpis = kpis;
    }
}
