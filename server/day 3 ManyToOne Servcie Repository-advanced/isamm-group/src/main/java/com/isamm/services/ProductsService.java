package com.isamm.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isamm.repositories.DepotRepository;
import com.isamm.repositories.ProductsRepository;

@Service
public class ProductsService {

	@Autowired
	ProductsRepository  productsRepository;
	
	@Autowired
	DepotRepository depotRepository;

	public ProductsRepository getProductsRepository() {
		return productsRepository;
	}

	public DepotRepository getDepotRepository() {
		return depotRepository;
	}
	
	
}
