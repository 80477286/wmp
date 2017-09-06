package com.chinasoft.wmp.version.model;

import java.io.Serializable;
import java.util.Date;

public class Version implements Serializable {
    private static final long serialVersionUID = -6937181247598900789L;

    protected String id;

    private String name;

    private String projectCode;

    private String huaweiPo;

    private String chinasoftPo;

    private String versionManager;

    private Double totalWorkloads;

    private Date startDate;

    private Date plannedEndDate;

    private Integer status;

    private String tmssVersionMapping;

    private String dtsVersionMapping;

    private String bizVersionMapping;

    private String description;

    private String pmhrid;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        if (id != null && id.trim().isEmpty()) {
            id = null;
        }
        this.id = id;
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
