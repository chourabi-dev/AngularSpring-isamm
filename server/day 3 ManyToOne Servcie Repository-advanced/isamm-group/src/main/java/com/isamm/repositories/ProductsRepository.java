package com.isamm.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.isamm.entities.Depots;
import com.isamm.entities.Products;

public interface ProductsRepository extends JpaRepository<Products,Long> {
	
	
	// find by product name => WHERE name='hello world'
	Products findByName(String name);
	
	List<Products> findByPriceLessThan( float price );
	List<Products> findByDepot( Depots depot );
	
	
	
	List<Products> findByPrice( Depots depot );
	
	

}
