package com.isamm.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.isamm.entities.Clients;
import com.isamm.entities.Employee;
import com.isamm.repositories.ClientRepository;
import com.isamm.request.EmployeeModel;
import com.isamm.services.EmployeeServices;

@RestController()
@RequestMapping("/clients")
public class ClientsController {

	@Autowired
	ClientRepository cr;
	
	@PostMapping("/add") // send data { name:""... }
	Clients addNew(@RequestBody EmployeeModel tmp ) {
		Clients e = new Clients();
		e.setName(tmp.getName());
		e.setEmail(tmp.getEmail());
		e.setPhone(tmp.getPhone()); 
		 
		return this.cr.save(e);
		
	}
}
