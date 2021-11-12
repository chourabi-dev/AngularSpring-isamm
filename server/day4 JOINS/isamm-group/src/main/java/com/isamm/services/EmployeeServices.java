package com.isamm.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isamm.repositories.DepotRepository;
import com.isamm.repositories.EmployeeRepository;

@Service
public class EmployeeServices {

	
	@Autowired
	EmployeeRepository er;
	
	
	@Autowired
	DepotRepository dr;


	public EmployeeRepository getEr() {
		return er;
	}


	public DepotRepository getDr() {
		return dr;
	}
	
	
	
}
