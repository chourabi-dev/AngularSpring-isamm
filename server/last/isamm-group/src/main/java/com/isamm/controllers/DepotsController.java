package com.isamm.controllers;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.isamm.entities.Depots;
import com.isamm.repositories.DepotRepository;
import com.isamm.request.DepotModel;
import com.isamm.response.ResponseModel;

@RestController()
@RequestMapping("/depots")
@CrossOrigin(origins = "*", maxAge = 3600)
public class DepotsController {
	
	
	// service
	@Autowired
	DepotRepository depotRepository;
	
	
	@PostMapping("/add") // send data { name:""... }
	Depots addNewDepot(@RequestBody DepotModel tmp ) {
		try {
			Depots d = new Depots();
			
			d.setAddress(tmp.getAddress());
			d.setName(tmp.getName());
			
			// save in the database ?
			return this.depotRepository.save(d);
			 
		}catch(Exception e) {
			return null;
		} 
	}
	
	@GetMapping("/list")
	List<Depots> findAllDepots(){
		return this.depotRepository.findAll();
	}
	
	
	@PostMapping("/update/{id}")
	Depots updateDepot(@RequestBody DepotModel tmp, @PathVariable() long id) {
		
		
		try {
			// find old depot 
			Depots old = this.depotRepository.findById(id).get();
			
			old.setAddress(tmp.getAddress());
			old.setName(tmp.getName());
			
			// old has an id => UPDATE
			return  this.depotRepository.save(old);
		}catch(NoSuchElementException e) {
			return null;
		}
		
	
		
	}
	
	
	
	// POST
	@DeleteMapping("/delete/{id}")
	ResponseModel deleteDepot(@PathVariable() long id) {
		ResponseModel res = new ResponseModel();
		
		try {
			// find old depot 
			Depots old = this.depotRepository.findById(id).get(); 
			this.depotRepository.delete(old);
			
			res.setSuccess(true);
			
			return res;
			
		}catch(NoSuchElementException e) {
			 res.setSuccess(false);
			 
			 return res;
		}
		
	
		
	}

}
