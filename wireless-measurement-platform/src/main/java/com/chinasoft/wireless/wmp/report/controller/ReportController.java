package com.chinasoft.wireless.wmp.report.controller;

import com.chinasoft.wireless.wmp.authorization.user.service.UserService;
import com.chinasoft.wireless.wmp.project.service.IProjectService;
import com.chinasoft.wireless.wmp.report.model.Kpi;
import com.chinasoft.wireless.wmp.report.model.Report;
import com.chinasoft.wireless.wmp.report.service.IReportService;
import com.mouse.web.supports.jpa.controller.BaseController;
import com.mouse.web.supports.jpa.service.IBaseService;
import com.mouse.web.supports.mvc.bind.annotation.EntityParam;
import com.mouse.web.supports.mvc.bind.annotation.JSON;
import com.mouse.web.supports.mvc.bind.annotation.MapParam;
import com.mouse.web.supports.mvc.request.PageParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/report")
public class ReportController extends BaseController<Report, String> {

    @Autowired
    private IReportService reportService;
    @Autowired
    private UserService userService;

    @Override
    protected IReportService getService() {
        return reportService;
    }

    @JSON()
    @RequestMapping(value = "/query_iteration_report")
    public Map<String, Object> queryIterationReport(String projectId, String reportConfigurationType, @EntityParam PageParam pageable) {
        return getService().queryIterationReport(projectId, reportConfigurationType, pageable);
    }

    @JSON()
    @RequestMapping(value = "/query_report")
    public Map<String, Object> queryReport(@MapParam Map<String, Object> params, @EntityParam PageParam pageable) {
        return getService().queryReport(params, pageable);
    }

    @Override
    @RequestMapping(value = "/get_by_id")

    @JSON(excludeProperties = {
            "data.*\\.children",
            "data.*\\.parent", "data.*\\.iterations",
            "data.*\\.iteration\\.project"})
    public Report getById(String id) {
        return super.getById(id);
    }

    @JSON(excludeProperties = {
            "data.*\\.kpis",
            "data.*\\.children",
            "data.*\\.parent", "data.*\\.iterations",
            "data.*\\.iteration\\.project"})
    @RequestMapping(value = "/query_simple")
    public Page<Report> querySimple(@MapParam Map<String, Object> params, @EntityParam PageParam pageable) {
        return super.query(params, pageable);
    }


    @JSON()
    @RequestMapping(value = "/save")
    public Report save(@EntityParam Report entity) {
        if (entity.getId() == null || entity.getId().trim().isEmpty()) {
            entity.setCreator(userService.getCurrentUser().get("username").toString());
            List<Kpi> list = entity.getKpis();
            {
                for (Kpi kpi : list) {
                    kpi.setId(null);
                }
            }
        }
        Report result = getService().save(entity);
        return result;
    }
}
