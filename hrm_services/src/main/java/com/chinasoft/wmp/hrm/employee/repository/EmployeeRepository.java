package com.chinasoft.wmp.hrm.employee.repository;

import com.chinasoft.wmp.hrm.employee.model.Employee;
import com.mouse.web.supports.jpa.repository.BaseRepository;
import com.mouse.web.supports.jpa.repository.BaseRepositoryImpl;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends BaseRepository<Employee, String> {
}
