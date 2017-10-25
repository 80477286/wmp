package com.chinasoft.wireless.wmp.iteration.repository;

import com.chinasoft.wireless.wmp.iteration.model.Iteration;
import com.chinasoft.wireless.wmp.organization.model.Organization;
import com.mouse.web.supports.jpa.repository.BaseRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by cwx183898 on 2017/8/9.
 */
@Repository
public interface IterationRepository extends BaseRepository<Iteration, String> {
}
