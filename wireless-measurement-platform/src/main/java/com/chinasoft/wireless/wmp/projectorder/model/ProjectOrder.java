package com.chinasoft.wireless.wmp.projectorder.model;

import com.chinasoft.wireless.wmp.organization.model.Organization;
import com.chinasoft.wireless.wmp.project.model.Project;
import com.mouse.web.supports.model.BaseEntity;
import org.apache.struts2.json.annotations.JSON;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@DynamicUpdate(true)
@DynamicInsert(true)
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@Table(name = "[ProjectOrder]", uniqueConstraints = {@UniqueConstraint(columnNames = {"name"})})
public class ProjectOrder extends BaseEntity {

    @Column(nullable = false, length = 255)
    private String name;

    /**
     * po号
     */
    private String po;

    /**
     * 内部po号
     */
    private String innerPo;

    /**
     * 合同类型
     */
    private String contractType;

    /**
     * 交付部
     */
    private String deliveryDepartment;
    private String huaweiPdu;

    /**
     * 项目类型
     */
    private String projectType;
    private String onSite;

    /**
     * 交付部经理
     */
    private String deliveryManager;

    /**
     * 华为PDU外包代表
     */
    private String huaweiPduOutsourcingRepresentatives;

    /**
     * 合同工作量
     */
    private Integer contractWorkload;

    /**
     * 合同金额
     */
    private Double contractAmount;

    /**
     * 立项时间
     */
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date startTime;

    /**
     * 项目结束时间
     */
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date endTime;

    /**
     * 预计开始时间
     */
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date planStartTime;

    @ManyToOne(optional = false)
    @JoinColumn(name = "Organization_id")
    private Organization organization;

    @OneToMany(mappedBy = "projectOrder")
    private List<Project> projects = new ArrayList<>(0);

    @JSON(name = "children")
    public List<Project> getProjects() {
        return projects;
    }

    public void setProjects(List<Project> projects) {
        this.projects = projects;
    }

    @JSON(name = "parent")
    public Organization getOrganization() {
        return organization;
    }

    public void setOrganization(Organization organization) {
        this.organization = organization;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return "po";
    }

    public String getPo() {
        return po;
    }

    public void setPo(String po) {
        this.po = po;
    }

    public String getInnerPo() {
        return innerPo;
    }

    public void setInnerPo(String innerPo) {
        this.innerPo = innerPo;
    }

    public String getContractType() {
        return contractType;
    }

    public void setContractType(String contractType) {
        this.contractType = contractType;
    }

    public String getDeliveryDepartment() {
        return deliveryDepartment;
    }

    public void setDeliveryDepartment(String deliveryDepartment) {
        this.deliveryDepartment = deliveryDepartment;
    }

    public String getHuaweiPdu() {
        return huaweiPdu;
    }

    public void setHuaweiPdu(String huaweiPdu) {
        this.huaweiPdu = huaweiPdu;
    }

    public String getProjectType() {
        return projectType;
    }

    public void setProjectType(String projectType) {
        this.projectType = projectType;
    }

    public String getOnSite() {
        return onSite;
    }

    public void setOnSite(String onSite) {
        this.onSite = onSite;
    }

    public String getDeliveryManager() {
        return deliveryManager;
    }

    public void setDeliveryManager(String deliveryManager) {
        this.deliveryManager = deliveryManager;
    }

    public String getHuaweiPduOutsourcingRepresentatives() {
        return huaweiPduOutsourcingRepresentatives;
    }

    public void setHuaweiPduOutsourcingRepresentatives(String huaweiPduOutsourcingRepresentatives) {
        this.huaweiPduOutsourcingRepresentatives = huaweiPduOutsourcingRepresentatives;
    }

    public Integer getContractWorkload() {
        return contractWorkload;
    }

    public void setContractWorkload(Integer contractWorkload) {
        this.contractWorkload = contractWorkload;
    }

    public Double getContractAmount() {
        return contractAmount;
    }

    public void setContractAmount(Double contractAmount) {
        this.contractAmount = contractAmount;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public Date getPlanStartTime() {
        return planStartTime;
    }

    public void setPlanStartTime(Date planStartTime) {
        this.planStartTime = planStartTime;
    }
}
