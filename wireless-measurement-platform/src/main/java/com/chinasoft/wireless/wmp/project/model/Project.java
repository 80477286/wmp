package com.chinasoft.wireless.wmp.project.model;

import com.chinasoft.wireless.wmp.iteration.model.Iteration;
import com.chinasoft.wireless.wmp.projectorder.model.ProjectOrder;
import com.mouse.web.supports.model.BaseEntity;
import org.apache.struts2.json.annotations.JSON;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@DynamicUpdate(true)
@DynamicInsert(true)
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@Table(name = "[Project]", uniqueConstraints = {@UniqueConstraint(columnNames = {"name"})})
public class Project extends BaseEntity {

    @Column(nullable = false, length = 255)
    private String name;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date startDate;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date plannedEndDate;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date actualEndDate;

    @Column(nullable = false, length = 32)
    private String projectManager;

    @Column(nullable = false)
    private Boolean currentManaged = false;

    @Column(columnDefinition = "TEXT")
    private String description;

    @ManyToOne(optional = false)
    @JoinColumn(name = "ProjectOrder_id")
    private ProjectOrder projectOrder;
    private String projectCode;
    private String projectType;
    private String implementationStatus;
    private String businessCategory;
    private String isInternetProject;
    private String businessSubclasses;
    private String size;
    private String qa;
    private String poProportion;
    private String projectWorkload;
    private String billingType;


    @OneToMany(mappedBy = "project")
    private List<Iteration> iterations;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getActualEndDate() {
        return actualEndDate;
    }

    public void setActualEndDate(Date actualEndDate) {
        this.actualEndDate = actualEndDate;
    }

    public String getDescription() {
        return description;
    }

    public Date getPlannedEndDate() {
        return plannedEndDate;
    }

    public void setPlannedEndDate(Date plannedEndDate) {
        this.plannedEndDate = plannedEndDate;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @JSON(name = "parent")
    public ProjectOrder getProjectOrder() {
        return projectOrder;
    }

    public void setProjectOrder(ProjectOrder projectOrder) {
        this.projectOrder = projectOrder;
    }

    public String getType() {
        return "project";
    }

    public String getProjectManager() {
        return projectManager;
    }

    public void setProjectManager(String projectManager) {
        this.projectManager = projectManager;
    }

    public List<Iteration> getIterations() {
        return iterations;
    }

    public void setIterations(List<Iteration> iterations) {
        this.iterations = iterations;
    }

    public Boolean getCurrentManaged() {
        return currentManaged;
    }

    public void setCurrentManaged(Boolean currentManaged) {
        this.currentManaged = currentManaged;
    }

    public String getProjectCode() {
        return projectCode;
    }

    public void setProjectCode(String projectCode) {
        this.projectCode = projectCode;
    }

    public String getProjectType() {
        return projectType;
    }

    public void setProjectType(String projectType) {
        this.projectType = projectType;
    }

    public String getImplementationStatus() {
        return implementationStatus;
    }

    public void setImplementationStatus(String implementationStatus) {
        this.implementationStatus = implementationStatus;
    }

    public String getBusinessCategory() {
        return businessCategory;
    }

    public void setBusinessCategory(String businessCategory) {
        this.businessCategory = businessCategory;
    }

    public String getIsInternetProject() {
        return isInternetProject;
    }

    public void setIsInternetProject(String isInternetProject) {
        this.isInternetProject = isInternetProject;
    }

    public String getBusinessSubclasses() {
        return businessSubclasses;
    }

    public void setBusinessSubclasses(String businessSubclasses) {
        this.businessSubclasses = businessSubclasses;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getQa() {
        return qa;
    }

    public void setQa(String qa) {
        this.qa = qa;
    }

    public String getPoProportion() {
        return poProportion;
    }

    public void setPoProportion(String poProportion) {
        this.poProportion = poProportion;
    }

    public String getProjectWorkload() {
        return projectWorkload;
    }

    public void setProjectWorkload(String projectWorkload) {
        this.projectWorkload = projectWorkload;
    }

    public String getBillingType() {
        return billingType;
    }

    public void setBillingType(String billingType) {
        this.billingType = billingType;
    }
}
