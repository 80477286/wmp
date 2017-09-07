package com.chinasoft.wireless.wmp.hrm.employee.repository;

import com.chinasoft.wireless.wmp.hrm.employee.model.Employee;
import com.mouse.web.supports.jpa.repository.BaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends BaseRepository<Employee, String> {
}
