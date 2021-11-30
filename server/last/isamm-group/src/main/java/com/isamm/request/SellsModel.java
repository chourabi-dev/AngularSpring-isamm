package com.isamm.request;

public class SellsModel {

 
	private long client;
	private long product;
	private int quantity;
	
	
	 
	
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public long getClient() {
		return client;
	}
	public void setClient(long client) {
		this.client = client;
	}
	public long getProduct() {
		return product;
	}
	public void setProduct(long product) {
		this.product = product;
	}
	public SellsModel() {
		super();
	}
	
	
	
}
