package com.chinasoft.wireless.wmp.hrm.employee.model;


import java.util.Date;

public class Employee {

    protected String id;

    protected String creator;

    protected Long cdt = new Date().getTime();

    public String getId() {
        return id;
    }

    public void setId(String id) {
        if (id != null && id.trim().isEmpty()) {
            id = null;
        }
        this.id = id;
    }

    public Long getCdt() {
        return cdt;
    }

    public void setCdt(Long cdt) {
        this.cdt = cdt;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    private String name;

    private String idNumber;

    private String chinasoftNumber;

    private String huaweiNumber;

    private String role;

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
