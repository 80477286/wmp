package com.chinasoft.wmp.version.model;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.HashMap;
import java.util.Map;

public class PageParam extends HashMap implements Pageable, Map {
    @Override
    public int getPageNumber() {
        if (this.containsKey("page")) {
            return Integer.parseInt(this.get("page").toString());
        } else {
            return 0;
        }
    }

    @Override
    public int getPageSize() {
        if (this.containsKey("size")) {
            return Integer.parseInt(this.get("size").toString());
        } else {
            return 0;
        }
    }

    @Override
    public int getOffset() {
        if (this.containsKey("Offset")) {
            return Integer.parseInt(this.get("Offset").toString());
        } else {
            return 0;
        }
    }

    public int getSize() {
        return getOffset();
    }

    @Override
    public Sort getSort() {
        return null;
    }

    @Override
    public Pageable next() {
        return null;
    }

    @Override
    public Pageable previousOrFirst() {
        return null;
    }

    @Override
    public Pageable first() {
        return null;
    }

    @Override
    public boolean hasPrevious() {
        return false;
    }
}
