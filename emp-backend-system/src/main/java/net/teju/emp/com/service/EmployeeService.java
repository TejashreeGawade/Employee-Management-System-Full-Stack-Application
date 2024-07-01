package net.teju.emp.com.service;

import java.util.List;

import net.teju.emp.com.dto.EmployeeDto;

public interface EmployeeService {
	EmployeeDto createEmployee(EmployeeDto employeeDto);
	EmployeeDto getEmployeeById(Long employeeId);
	List<EmployeeDto> getAllEmployee(); 
	EmployeeDto updateEmployee(Long employeeId, EmployeeDto employeeDto);
	void deleteEmployee(Long employeeId);
}
