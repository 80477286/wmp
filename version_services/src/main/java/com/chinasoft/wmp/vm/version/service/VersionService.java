package com.chinasoft.wmp.vm.version.service;

import com.chinasoft.wmp.vm.version.model.Version;
import com.chinasoft.wmp.vm.version.repository.VersionRepository;
import com.mouse.web.supports.jpa.repository.BaseRepository;
import com.mouse.web.supports.jpa.service.BaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class VersionService extends BaseService<Version, String> implements IVersionService {
    @Autowired
    private VersionRepository repository;

    @Override
    public BaseRepository<Version, String> getRepository() {
        return this.repository;
    }

    @Override
    public Version save(Version entity) {
        if (entity.getCreator() == null) {
            entity.setCreator(SecurityContextHolder.getContext().getAuthentication().getName());
        }
        return super.save(entity);
    }
}
