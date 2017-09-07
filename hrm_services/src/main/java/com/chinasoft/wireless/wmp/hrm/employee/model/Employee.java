package com.chinasoft.wireless.wmp.hrm.employee.model;

import com.mouse.web.supports.model.BaseEntity;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@DynamicUpdate(true)
@DynamicInsert(true)
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@Table(uniqueConstraints = {@UniqueConstraint(columnNames = {"idNumber"}),
        @UniqueConstraint(columnNames = {"chinasoftNumber"}),
        @UniqueConstraint(columnNames = {"huaweiNumber"})})
public class Employee extends BaseEntity {
    private static final long serialVersionUID = 9148392556100591714L;

    @Column(nullable = false, length = 32)
    private String name;

    @Column(nullable = false, length = 18)
    private String idNumber;

    @Column(nullable = false, length = 18)
    private String chinasoftNumber;

    @Column(nullable = false, length = 18)
    private String huaweiNumber;

    @Column(nullable = false, length = 32)
    private String role;

    @Column(nullable = false, length = 18)
    private String status;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIdNumber() {
        return idNumber;
    }

    public void setIdNumber(String idNumber) {
        this.idNumber = idNumber;
    }

    public String getChinasoftNumber() {
        return chinasoftNumber;
    }

    public void setChinasoftNumber(String chinasoftNumber) {
        this.chinasoftNumber = chinasoftNumber;
    }

    public String getHuaweiNumber() {
        return huaweiNumber;
    }

    public void setHuaweiNumber(String huaweiNumber) {
        this.huaweiNumber = huaweiNumber;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

}
