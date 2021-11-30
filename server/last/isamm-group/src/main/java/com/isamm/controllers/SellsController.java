package com.isamm.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.isamm.entities.Clients;
import com.isamm.entities.Products;
import com.isamm.entities.Sells;
import com.isamm.request.SellsModel;
import com.isamm.response.ResponseModel;
import com.isamm.services.SellsService;


@RestController()
@RequestMapping("/sells")
@CrossOrigin(origins = "*", maxAge = 3600)

public class SellsController {

	@Autowired
	SellsService sellsService;
	
	
	
	@PostMapping("/add")
	ResponseModel addNew(@RequestBody SellsModel sm) {
		
		ResponseModel res = new ResponseModel();
		// get product !!
		Products p = this.sellsService.getProductsRepository().findById(sm.getProduct()).get();
		Clients c = this.sellsService.getClientsRepository().findById(sm.getClient()).get();
		
		
		if( sm.getQuantity() <= p.getQuantity() ) {
			
			Sells s = new Sells();
			
			System.out.println(s.getDate());
			
			s.setQuantity(sm.getQuantity()); 
			s.setClient(c);
			s.setProduct(p);
			
			this.sellsService.getSellsRepository().save(s); 
			p.setQuantity(  (p.getQuantity() - s.getQuantity() ) ); 
			this.sellsService.getProductsRepository().save(p);
			
			res.setSuccess(true);
			res.setMessage("purchsed successfully");
		}else {
			// oups !!
			
			res.setSuccess(false);
			res.setMessage("Out of stock !!");
		}
		
		
		return res;
		
	}
	
	
	
	@PostMapping("/add-many")
	ResponseEntity<?> addMany(@RequestBody List<SellsModel> list) {
		
		int inserted = 0;
		int notInserted = 0;
		
		
		ResponseModel res = new ResponseModel();
		
		for( SellsModel sm: list ) {
			// get product !!
			Products p = this.sellsService.getProductsRepository().findById(sm.getProduct()).get();
			Clients c = this.sellsService.getClientsRepository().findById(sm.getClient()).get();
			
			
			if( sm.getQuantity() <= p.getQuantity() ) {
				
				Sells s = new Sells();
				
				System.out.println(s.getDate());
				
				s.setQuantity(sm.getQuantity()); 
				s.setClient(c);
				s.setProduct(p);
				
				this.sellsService.getSellsRepository().save(s); 
				p.setQuantity(  (p.getQuantity() - s.getQuantity() ) ); 
				this.sellsService.getProductsRepository().save(p);
				
				inserted++;
				
			}else {
				// oups !!
				
				notInserted++;
			}
		}
		
		
		return ResponseEntity.ok().body(new ResponseModel(true,inserted+" successfull, "+notInserted+" unseccessfull !"));
		 
		
	}
}
