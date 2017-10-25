package com.chinasoft.wireless.wmp.chartconfiguration.model;

import com.mouse.web.supports.model.BaseEntity;
import com.mouse.web.supports.model.IdentifyEntity;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.security.core.context.SecurityContextHolder;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@DynamicUpdate(true)
@DynamicInsert(true)
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@Table(name = "[chart_configuration]")
public class ChartConfiguration extends IdentifyEntity {

    /**
     * 图的标题
     */
    private String title;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "chart_configuration_id")
    private List<Axis> axes = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "chart_configuration_id")
    private List<Series> series = new ArrayList<>();

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<Series> getSeries() {
        return series;
    }

    public void setSeries(List<Series> series) {
        this.series = series;
    }

    public List<Axis> getAxes() {
        return axes;
    }

    public void setAxes(List<Axis> axes) {
        this.axes = axes;
    }

}
