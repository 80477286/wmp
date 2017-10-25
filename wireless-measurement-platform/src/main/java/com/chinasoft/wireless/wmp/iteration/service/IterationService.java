package com.chinasoft.wireless.wmp.iteration.service;

import com.chinasoft.wireless.wmp.iteration.model.Iteration;
import com.chinasoft.wireless.wmp.iteration.repository.IterationRepository;
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
public class IterationService extends BaseService<Iteration, String> implements IIterationService {
    @Autowired
    private IterationRepository repository;

    @Override
    public BaseRepository<Iteration, String> getRepository() {
        return repository;
    }
}
