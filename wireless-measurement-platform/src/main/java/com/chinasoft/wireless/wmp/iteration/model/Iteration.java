package com.chinasoft.wireless.wmp.iteration.model;

import com.chinasoft.wireless.wmp.project.model.Project;
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
@Table(name = "[Iteration]", uniqueConstraints = {@UniqueConstraint(columnNames = {"name"})})
public class Iteration extends BaseEntity {

    @Column(nullable = false, length = 255)
    private String name;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date planedStartDate;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date planedEndDate;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date actuaStartDate;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date actualEndDate;
    @ManyToOne()
    @JoinColumn(name = "Project_id")
    private Project project;

    @Column(columnDefinition = "TEXT")
    private String description;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getPlanedStartDate() {
        return planedStartDate;
    }

    public void setPlanedStartDate(Date planedStartDate) {
        this.planedStartDate = planedStartDate;
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

    public String getType() {
        return "project";
    }

    public Date getActuaStartDate() {
        return actuaStartDate;
    }

    public void setActuaStartDate(Date actuaStartDate) {
        this.actuaStartDate = actuaStartDate;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }
}
