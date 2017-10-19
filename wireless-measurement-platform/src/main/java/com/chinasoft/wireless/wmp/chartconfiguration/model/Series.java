package com.chinasoft.wireless.wmp.chartconfiguration.model;

import com.mouse.web.supports.model.IdentifyEntity;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@DynamicUpdate(true)
@DynamicInsert(true)
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@Table(name = "[series]")
public class Series extends IdentifyEntity {
    @Column(nullable = false, length = 128)
    private String type;
    @Column(nullable = false, length = 128)
    private String xField;
    @Column(nullable = false, length = 128)
    private String xFieldAlias;
    @Column(nullable = false, length = 128)
    private String yFields;
    @Column(nullable = false, length = 128)
    private String yFieldAliases;
    @Column(nullable = false, length = 8)
    private String axis;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getxField() {
        return xField;
    }

    public void setxField(String xField) {
        this.xField = xField;
    }

    public String getxFieldAlias() {
        return xFieldAlias;
    }

    public void setxFieldAlias(String xFieldAlias) {
        this.xFieldAlias = xFieldAlias;
    }

    public String getyFields() {
        return yFields;
    }

    public void setyFields(String yFields) {
        this.yFields = yFields;
    }

    public String getyFieldAliases() {
        return yFieldAliases;
    }

    public void setyFieldAliases(String yFieldAliases) {
        this.yFieldAliases = yFieldAliases;
    }

    public String getAxis() {
        return axis;
    }

    public void setAxis(String axis) {
        this.axis = axis;
    }
}
