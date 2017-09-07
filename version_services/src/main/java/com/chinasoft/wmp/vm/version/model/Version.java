package com.chinasoft.wmp.vm.version.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.mouse.web.supports.model.BaseEntity;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@DynamicInsert(true)
@DynamicUpdate(true)
@Table(uniqueConstraints = {@UniqueConstraint(columnNames = {"name"})})
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Version extends BaseEntity {
    private static final long serialVersionUID = -6937181247598900789L;

    @Column(nullable = false, length = 256)
    private String name;

    @Column(nullable = false, length = 256)
    private String projectCode;

    @Column(nullable = false, length = 64)
    private String huaweiPo;

    @Column(nullable = false, length = 64)
    private String chinasoftPo;

    @Column(nullable = false, length = 64)
    private String versionManager;

    @Column(nullable = false, length = 64)
    private Double totalWorkloads;

    @Column(nullable = false)
    private Date startDate;

    @Column()
    private Date plannedEndDate;

    @Column(nullable = false)
    private Integer status;

    @Column(columnDefinition = "TEXT")
    private String tmssVersionMapping;

    @Column(columnDefinition = "TEXT")
    private String dtsVersionMapping;

    @Column(columnDefinition = "TEXT")
    private String bizVersionMapping;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(length = 36)
    private String pmhrid;

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

    public String getProjectCode() {
        return projectCode;
    }

    public void setProjectCode(String projectCode) {
        this.projectCode = projectCode;
    }

    public String getHuaweiPo() {
        return huaweiPo;
    }

    public void setHuaweiPo(String huaweiPo) {
        this.huaweiPo = huaweiPo;
    }

    public String getChinasoftPo() {
        return chinasoftPo;
    }

    public void setChinasoftPo(String chinasoftPo) {
        this.chinasoftPo = chinasoftPo;
    }

    public String getVersionManager() {
        return versionManager;
    }

    public void setVersionManager(String versionManager) {
        this.versionManager = versionManager;
    }

    public Double getTotalWorkloads() {
        return totalWorkloads;
    }

    public void setTotalWorkloads(Double totalWorkloads) {
        this.totalWorkloads = totalWorkloads;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getPlannedEndDate() {
        return plannedEndDate;
    }

    public void setPlannedEndDate(Date plannedEndDate) {
        this.plannedEndDate = plannedEndDate;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getPmhrid() {
        return pmhrid;
    }

    public void setPmhrid(String pmhrid) {
        this.pmhrid = pmhrid;
    }

    public String getTmssVersionMapping() {
        return tmssVersionMapping;
    }

    public void setTmssVersionMapping(String tmssVersionMapping) {
        this.tmssVersionMapping = tmssVersionMapping;
    }

    public String getDtsVersionMapping() {
        return dtsVersionMapping;
    }

    public void setDtsVersionMapping(String dtsVersionMapping) {
        this.dtsVersionMapping = dtsVersionMapping;
    }

    public String getBizVersionMapping() {
        return bizVersionMapping;
    }

    public void setBizVersionMapping(String bizVersionMapping) {
        this.bizVersionMapping = bizVersionMapping;
    }

}
