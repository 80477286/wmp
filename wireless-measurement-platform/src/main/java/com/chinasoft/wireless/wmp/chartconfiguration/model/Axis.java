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
@Table(name = "[axis]")
public class Axis extends IdentifyEntity {
    /**
     * 类型 X轴默认 category
     * Y轴为 numeric
     */
    @Column(nullable = false, length = 128)
    private String type;

    /**
     * 图的显示位置
     */
    @Column(nullable = false, length = 128)
    private String position;

    /**
     * 字段，配置页面不显示
     */
    @Column(nullable = false, length = 255)
    private String fields;

    private String title;
    /**
     * 字段别名
     */
    @Column(nullable = false, length = 128)
    private String fieldAliases;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getFields() {
        return fields;
    }

    public void setFields(String fields) {
        this.fields = fields;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getFieldAliases() {
        return fieldAliases;
    }

    public void setFieldAliases(String fieldAliases) {
        this.fieldAliases = fieldAliases;
    }
}
