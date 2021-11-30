package com.isamm.entities;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table( name="sells" )

public class Sells {

	@Id
	@GeneratedValue( strategy = GenerationType.AUTO )
	 
	private int quantity;
	private LocalDateTime date = LocalDateTime.now();
	
	
	@ManyToOne
	@JoinColumn( name="products_id" )
	private Products product;
	
	
	@ManyToOne
	@JoinColumn( name="clients_id" )
	private Clients client;


	public int getQuantity() {
		return quantity;
	}


	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}


	public LocalDateTime getDate() {
		return date;
	}


	public void setDate(LocalDateTime date) {
		this.date = date;
	}


	public Products getProduct() {
		return product;
	}


	public void setProduct(Products product) {
		this.product = product;
	}


	public Clients getClient() {
		return client;
	}


	public void setClient(Clients client) {
		this.client = client;
	}


	public Sells() {
		super();
	}
	
	
	
	
}
