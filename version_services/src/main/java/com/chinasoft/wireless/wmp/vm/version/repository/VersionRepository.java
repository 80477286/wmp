package com.chinasoft.wireless.wmp.vm.version.repository;

import com.chinasoft.wireless.wmp.vm.version.model.Version;
import com.mouse.web.supports.jpa.repository.BaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VersionRepository extends BaseRepository<Version, String> {
}
