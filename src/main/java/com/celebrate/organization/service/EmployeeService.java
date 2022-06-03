package com.celebrate.organization.service;

import com.celebrate.organization.model.Employee;
import org.springframework.stereotype.Service;

import java.util.List;

public interface EmployeeService {

    List<Employee> getAllEmployees();

    void saveEmployee(Employee employee);
}
