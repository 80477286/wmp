package com.chinasoft.wmp.vm.version.model;

import com.mouse.web.supports.model.BaseEntity;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import java.util.Date;

@Entity
@DynamicInsert(true)
@DynamicUpdate(true)
@Table(uniqueConstraints = {@UniqueConstraint(columnNames = {"name"})})
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Version extends BaseEntity {
    private static final long serialVersionUID = -6937181247598900789L;

    @Column(nullable = false, length = 256)
    private String name;

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
    private String description;


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


}
