package com.isamm.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.isamm.entities.Depots;
import com.isamm.entities.Employee;
import com.isamm.request.DepotModel;
import com.isamm.request.EmployeeModel;
import com.isamm.services.EmployeeServices;

@RestController()
@RequestMapping("/employees")
public class EmployeeController {

	@Autowired
	EmployeeServices es;
	
	@PostMapping("/add") // send data { name:""... }
	Employee addNew(@RequestBody EmployeeModel tmp ) {
		Employee e = new Employee();
		e.setName(tmp.getName());
		e.setEmail(tmp.getEmail());
		e.setPhone(tmp.getPhone()); 
		e.setDepot( this.es.getDr().findById(tmp.getDepot()).get() ); 
		return this.es.getEr().save(e);
		
	}
}
