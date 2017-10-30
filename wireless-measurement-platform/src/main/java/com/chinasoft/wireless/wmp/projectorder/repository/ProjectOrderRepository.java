package com.chinasoft.wireless.wmp.projectorder.repository;

import com.chinasoft.wireless.wmp.projectorder.model.ProjectOrder;
import com.mouse.web.supports.jpa.repository.BaseRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by cwx183898 on 2017/8/9.
 */
@Repository
public interface ProjectOrderRepository extends BaseRepository<ProjectOrder, String> {
}
