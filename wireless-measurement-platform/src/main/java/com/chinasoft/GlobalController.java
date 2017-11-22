package com.chinasoft;

import com.chinasoft.wireless.wmp.authorization.user.service.UserService;
import com.chinasoft.wireless.wmp.project.model.Project;
import com.chinasoft.wireless.wmp.project.service.IProjectService;
import com.mouse.web.supports.mvc.bind.annotation.JSON;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.LinkedHashMap;
import java.util.Map;

@RestController
public class GlobalController {

    @Autowired
    private UserService versionService;
    @Autowired
    private IProjectService projectService;

    @RequestMapping({"/get_current_user"})
    @JSON
    public LinkedHashMap getCurrentUser() {
        LinkedHashMap user = versionService.getCurrentUser();
        return user;
    }


    @RequestMapping({"/get_localhost"})
    @JSON
    public Object getLocalhost(HttpServletRequest request) {
        String host = request.getRemoteHost();
        return host;
    }


    @RequestMapping({"/load_initial_information"})
    @JSON(excludeProperties = {"data.*\\.projectOrder", "data.*\\.iterations"})
    public Object loadInitialInformation(HttpServletRequest request) {
        Map<String, Object> inf = new LinkedHashMap<String, Object>(0);
        LinkedHashMap user = versionService.getCurrentUser();
        Project project = projectService.getUserCurrentProject();
        String host = request.getRemoteHost();
        inf.put("user", user);
        inf.put("localhost", host);
        inf.put("project", project);
        return inf;
    }


}
