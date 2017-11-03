package com.chinasoft.wireless.wmp.iteration.controller;

import com.chinasoft.wireless.wmp.iteration.model.Iteration;
import com.chinasoft.wireless.wmp.iteration.service.IIterationService;
import com.mouse.web.supports.jpa.controller.BaseController;
import com.mouse.web.supports.jpa.service.IBaseService;
import com.mouse.web.supports.mvc.bind.annotation.EntityParam;
import com.mouse.web.supports.mvc.bind.annotation.JSON;
import com.mouse.web.supports.mvc.bind.annotation.MapParam;
import com.mouse.web.supports.mvc.request.PageParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * Created by cwx183898 on 2017/8/10.
 */
@RestController
@RequestMapping({"/iteration"})
public class IterationController extends BaseController<Iteration, String> {
    @Autowired
    private IIterationService service;

    @Override
    protected IBaseService<Iteration, String> getService() {
        return service;
    }


    @JSON(excludeProperties = {"data.*\\.project"})
    @RequestMapping(value = "/query_simple")
    public Page<Iteration> querySimple(@MapParam Map<String, Object> params, @EntityParam PageParam pageable) {
        return getService().query(params, pageable);
    }
}
