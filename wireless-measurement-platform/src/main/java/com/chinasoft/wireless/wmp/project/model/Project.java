package com.chinasoft.wireless.wmp.project.model;

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
    private Date planedEndDate;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date actualEndDate;

    @Column(columnDefinition = "TEXT")
    private String description;

    @ManyToOne()
    @JoinColumn(name = "ProjectOrder_id")
    private ProjectOrder projectOrder;

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

    public Date getPlanedEndDate() {
        return planedEndDate;
    }

    public void setPlanedEndDate(Date planedEndDate) {
        this.planedEndDate = planedEndDate;
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
}
