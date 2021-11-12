package com.isamm.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.isamm.entities.Depots;
import com.isamm.entities.Products;
import com.isamm.request.ProductModel;
import com.isamm.services.ProductsService;

@RestController()
@RequestMapping("/products")

public class ProductsController {

	@Autowired
	ProductsService ps; 
	
	// we need to add a new product 
	@PostMapping("/add")
	Products addNewProduct(@RequestBody ProductModel pm ) {
		Products p = new Products();
		
		p.setName(pm.getName());
		p.setQuantity(pm.getQuantity());
		p.setPrice(pm.getPrice());
		p.setDepot( this.ps.getDepotRepository().findById( pm.getDepot() ).get() );
		
		return this.ps.getProductsRepository().save(p); 
	}
	
	
	@PostMapping("/update/{id}")
	Products updateProduct(@RequestBody ProductModel pm, @PathVariable() long id ) {
		Products p =  this.ps.getProductsRepository().findById(id).get();
		
		
		p.setName(pm.getName());
		p.setQuantity(pm.getQuantity());
		p.setPrice(pm.getPrice());
		p.setDepot( this.ps.getDepotRepository().findById( pm.getDepot() ).get() );
		
		return this.ps.getProductsRepository().save(p); 
	}
	
	
	@GetMapping("/list")
	List<Products> getAll(){
		return this.ps.getProductsRepository().findAll();
		
	}
	
	
	// find products where price < 2000
	@GetMapping("/price-less")
	List<Products> getByPriceLessThan(@RequestParam( required = true ) float price ){
		
		return this.ps.getProductsRepository().findByPriceLessThan(price);
		
	}
	
	
	// find by depot
	@GetMapping("/findByDepot")
	List<Products> getByDepot(@RequestParam( required = true ) long depot ){
		Depots d = this.ps.getDepotRepository().findById(depot).get();
		
		return this.ps.getProductsRepository().findByDepot(d);
		
	}
	
	
	
}
