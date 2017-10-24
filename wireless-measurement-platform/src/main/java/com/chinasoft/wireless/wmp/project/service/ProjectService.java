package com.chinasoft.wireless.wmp.project.service;

import com.chinasoft.wireless.wmp.authorization.user.service.UserService;
import com.chinasoft.wireless.wmp.project.model.Project;
import com.chinasoft.wireless.wmp.project.repository.ProjectRepository;
import com.mouse.web.supports.jpa.repository.BaseRepository;
import com.mouse.web.supports.jpa.service.BaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by cwx183898 on 2017/8/9.
 */
@Service
@Transactional
public class ProjectService extends BaseService<Project, String> implements IProjectService {
    @Autowired
    private ProjectRepository repository;
    @Autowired
    private UserService userService;

    @Override
    public BaseRepository<Project, String> getRepository() {
        return repository;
    }

    @Override
    public Project getUserCurrentProject() {
        String username = (String) userService.getCurrentUser().get("username");
        Map<String, Object> params = new HashMap<String, Object>();
        params.put("projectManager_eq", username);
        Page<Project> ps = query(params, null);
        if (ps.getContent().size() > 0) {
            for (Project p : ps.getContent()) {
                if (p.getCurrentManaged()) {
                    return p;
                }
            }
            return ps.getContent().get(0);
        }
        return null;
    }

    @Override
    public String getUserCurrentProjectId() {
        Project p = getUserCurrentProject();
        if (p != null) {
            return p.getId();
        }
        return null;
    }
}
