package net.teju.emp.com.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import net.teju.emp.com.Exception.ResourceNotFoundException;
import net.teju.emp.com.dto.EmployeeDto;
import net.teju.emp.com.entity.Employee;
import net.teju.emp.com.mapper.EmployeeMapper;
import net.teju.emp.com.repository.EmployeeRepository;
import net.teju.emp.com.service.EmployeeService;

@Service
//@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService{

	
	private EmployeeRepository employeeRepository;
	
	public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
		super();
		this.employeeRepository = employeeRepository;
	}
	
	@Override
	public EmployeeDto createEmployee(EmployeeDto employeeDto) {
		// TODO Auto-generated method stub
		
		Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
		Employee savedEmployee = employeeRepository.save(employee);
		return EmployeeMapper.mapToEmployeeDto(savedEmployee);
	}

	@Override
	public EmployeeDto getEmployeeById(Long employeeId) {
		// TODO Auto-generated method stub
		Employee employee = employeeRepository.findById(employeeId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee Not exist with given Id "+employeeId));
		return EmployeeMapper.mapToEmployeeDto(employee);
	}

	@Override
	public List<EmployeeDto> getAllEmployee() {
		// TODO Auto-generated method stub
		List<Employee> employees = employeeRepository.findAll();
		return employees.stream().map((employee) -> EmployeeMapper.mapToEmployeeDto(employee))
				.collect(Collectors.toList());
	}

	@Override
	public EmployeeDto updateEmployee(Long employeeId, EmployeeDto employeeDto) {
		// TODO Auto-generated method stub
		Employee employee = employeeRepository.findById(employeeId).orElseThrow(() -> new ResourceNotFoundException("Employee is not exist with given Id :"+employeeId));
		
		employee.setFirstName(employeeDto.getFirstName());
		employee.setLastName(employeeDto.getLastName());
		employee.setEmail(employeeDto.getEmail());
		
		Employee updatedEmployee = employeeRepository.save(employee);
		
		return EmployeeMapper.mapToEmployeeDto(updatedEmployee);
	}

	@Override
	public void deleteEmployee(Long employeeId) {
		// TODO Auto-generated method stub
		Employee employee = employeeRepository.findById(employeeId).orElseThrow(() -> new 
				ResourceNotFoundException("Employee not exist with given Id : "+employeeId));
		employeeRepository.deleteById(employeeId);
	}
	


}
