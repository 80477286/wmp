package com.chinasoft.wireless.wmp.organization.service;

import com.chinasoft.wireless.wmp.organization.model.Organization;
import com.chinasoft.wireless.wmp.organization.repository.OrganizationRepository;
import com.mouse.web.supports.jpa.repository.BaseRepository;
import com.mouse.web.supports.jpa.service.BaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by cwx183898 on 2017/8/9.
 */
@Service
@Transactional
public class OrganizationService extends BaseService<Organization, String> implements IOrganizationService {
    @Autowired
    private OrganizationRepository repository;

    @Override
    public BaseRepository<Organization, String> getRepository() {
        return repository;
    }
}
