package com.isamm.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table( name="employees" )
public class Employee {

	@Id
	@GeneratedValue( strategy = GenerationType.AUTO )
	private long id;
	
	
	private String name;
	private String email;
	private String phone;
	
	@OneToOne
	@JoinColumn( name="depots_id" ) 
	private Depots depot;
	
	
	
	public Depots getDepot() {
		return depot;
	}
	public void setDepot(Depots depot) {
		this.depot = depot;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
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
	public Employee() {
		super();
	}
	
	
	
	
}
