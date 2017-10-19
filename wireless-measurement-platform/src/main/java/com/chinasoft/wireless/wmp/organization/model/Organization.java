package com.chinasoft.wireless.wmp.organization.model;

import com.chinasoft.wireless.wmp.projectorder.model.ProjectOrder;
import com.mouse.web.supports.model.BaseEntity;
import org.apache.struts2.json.annotations.JSON;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.List;

@Entity
@DynamicUpdate(true)
@DynamicInsert(true)
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@Table(name = "[Organization]", uniqueConstraints = {@UniqueConstraint(columnNames = {"name"})})
public class Organization extends BaseEntity {

    @Column(length = 64, nullable = false)
    private String name;

    @Column(length = 8, nullable = false)
    private String type;

    @Column(columnDefinition = "TEXT")
    private String description;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "p_id")
    private Organization parent;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "parent")
    private List<Organization> children;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "organization")
    private List<ProjectOrder> projectOrders;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Organization getParent() {
        return parent;
    }

    public void setParent(Organization parent) {
        this.parent = parent;
    }

    @JSON(serialize = false, deserialize = false)
    public List<Organization> getChildren() {
        return children;
    }

    public void setChildren(List<Organization> children) {
        this.children = children;
    }


    @JSON(serialize = false, deserialize = false)
    public List<ProjectOrder> getProjectOrders() {
        return projectOrders;
    }

    public void setProjectOrders(List<ProjectOrder> projectOrders) {
        this.projectOrders = projectOrders;
    }

    @JSON(name = "children")
    public List getChildrens() {
        if (children != null && children.size() > 0) {
            return children;
        } else if (projectOrders != null && projectOrders.size() > 0) {
            return projectOrders;
        }
        return null;
    }
}
