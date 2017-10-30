package com.chinasoft.wireless.wmp.projectorder.service;

import com.chinasoft.wireless.wmp.projectorder.model.ProjectOrder;
import com.chinasoft.wireless.wmp.projectorder.repository.ProjectOrderRepository;
import com.mouse.web.supports.jpa.repository.BaseRepository;
import com.mouse.web.supports.jpa.service.BaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by cwx183898 on 2017/8/9.
 */
@Service
@Transactional
public class ProjectOrderService extends BaseService<ProjectOrder, String> implements IProjectOrderService {
    @Autowired
    private ProjectOrderRepository repository;

    @Override
    public BaseRepository<ProjectOrder, String> getRepository() {
        return repository;
    }


    @Override
    public <S extends ProjectOrder> S save(S entity) {
        if (entity.getCreator() == null) {
            String creator = SecurityContextHolder.getContext().getAuthentication().getName();
            entity.setCreator(creator);
        }
        return super.save(entity);
    }

}
