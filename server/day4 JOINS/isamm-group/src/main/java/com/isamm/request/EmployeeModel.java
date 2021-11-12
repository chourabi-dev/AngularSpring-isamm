package com.isamm.request;

public class EmployeeModel {

	private String name;
	private String email;
	private String phone;
	private long depot;
	
	
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public long getDepot() {
		return depot;
	}
	public void setDepot(long depot) {
		this.depot = depot;
	}
	public EmployeeModel() {
		super();
	}
	
	
	
}
