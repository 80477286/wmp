package com.chinasoft.wireless.wmp.hrm.employee.service;

import com.chinasoft.wireless.wmp.hrm.employee.model.Employee;
import com.chinasoft.wireless.wmp.hrm.employee.repository.EmployeeRepository;
import com.mouse.web.supports.jpa.repository.BaseRepository;
import com.mouse.web.supports.jpa.service.BaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class EmployeeService extends BaseService<Employee, String> implements IEmployeeService {
    @Autowired
    private EmployeeRepository repository;

    @Override
    public BaseRepository<Employee, String> getRepository() {
        return this.repository;
    }

    @Override
    public Employee save(Employee entity) {
        if (entity.getCreator() == null) {
            entity.setCreator(SecurityContextHolder.getContext().getAuthentication().getName());
            entity.setIdNumber(new Random().nextInt(5000) + "");
        }
        return super.save(entity);
    }
}
