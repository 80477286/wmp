package com.chinasoft.wmp.hrm.employee.service;

import com.chinasoft.wmp.hrm.employee.model.Employee;
import com.chinasoft.wmp.hrm.employee.repository.EmployeeRepository;
import com.mouse.web.supports.jpa.repository.BaseRepository;
import com.mouse.web.supports.jpa.service.BaseService;
import com.mouse.web.supports.jpa.service.IBaseService;
import com.netflix.discovery.converters.Auto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService extends BaseService<Employee, String> implements IEmployeeService {
    @Autowired
    private EmployeeRepository repository;

    @Override
    public BaseRepository<Employee, String> getRepository() {
        return this.repository;
    }
}
