package com.chinasoft.wireless.wmp.chartconfiguration.model;

import com.mouse.web.supports.model.BaseEntity;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@DynamicUpdate(true)
@DynamicInsert(true)
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@Table(name = "[chart_configuration]")
public class ChartConfiguration extends BaseEntity {

    /**
     * 图的标题
     */
    private String title;

    @OneToMany
    @JoinColumn(name = "chart_configuration_id")
    private List<Axis> leftYAxises = new ArrayList<>();
    @OneToMany
    @JoinColumn(name = "chart_configuration_id")
    private List<Axis> rightYAxises = new ArrayList<>();
    @OneToMany
    @JoinColumn(name = "chart_configuration_id")
    private List<Axis> xAxises = new ArrayList<>();

    @OneToMany
    @JoinColumn(name = "chart_configuration_id")
    private List<Series> series = new ArrayList<>();

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<Axis> getLeftYAxises() {
        return leftYAxises;
    }

    public void setLeftYAxises(List<Axis> leftYAxises) {
        this.leftYAxises = leftYAxises;
    }

    public List<Axis> getRightYAxises() {
        return rightYAxises;
    }

    public void setRightYAxises(List<Axis> rightYAxises) {
        this.rightYAxises = rightYAxises;
    }

    public List<Axis> getxAxises() {
        return xAxises;
    }

    public void setxAxises(List<Axis> xAxises) {
        this.xAxises = xAxises;
    }

    public List<Series> getSeries() {
        return series;
    }

    public void setSeries(List<Series> series) {
        this.series = series;
    }
}
