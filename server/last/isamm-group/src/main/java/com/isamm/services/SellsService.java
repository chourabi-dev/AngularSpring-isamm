package com.isamm.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isamm.repositories.ClientRepository;
import com.isamm.repositories.ProductsRepository;
import com.isamm.repositories.SellsRepository;

@Service
public class SellsService {

	@Autowired
	SellsRepository sellsRepository;
	
	@Autowired
	ClientRepository clientsRepository;
	
	@Autowired
	ProductsRepository productsRepository;

	public SellsRepository getSellsRepository() {
		return sellsRepository;
	}

	public ClientRepository getClientsRepository() {
		return clientsRepository;
	}

	public ProductsRepository getProductsRepository() {
		return productsRepository;
	}
	
	
}
