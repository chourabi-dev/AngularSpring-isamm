package com.isamm.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.isamm.entities.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {

}
