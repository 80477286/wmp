package com.chinasoft.wmp.version.employee.repository;

import com.chinasoft.wmp.version.employee.model.Version;
import com.mouse.web.supports.jpa.repository.BaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VersionRepository extends BaseRepository<Version, String> {
}
