package com.chinasoft.wireless.wmp.reportconfiguration.model;

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
@Table(name = "[kpi_configuration]")
public class KpiConfiguration extends IdentifyEntity {

    /**
     * 指标名称
     */
    @Column(nullable = false, length = 128)
    private String name;

    /**
     * 字段名称
     */
    @Column(nullable = false, length = 128)
    private String field;

    /**
     * 计算表达式
     */
    private String expression;


    private String dataType = "string";

    /**
     * 描述
     */
    private String description;

    public String getDataType() {
        return dataType;
    }

    public void setDataType(String dataType) {
        this.dataType = dataType;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public String getExpression() {
        return expression;
    }

    public void setExpression(String expression) {
        this.expression = expression;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
