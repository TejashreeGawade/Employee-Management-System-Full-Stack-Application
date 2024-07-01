package net.teju.emp.com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import net.teju.emp.com.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
