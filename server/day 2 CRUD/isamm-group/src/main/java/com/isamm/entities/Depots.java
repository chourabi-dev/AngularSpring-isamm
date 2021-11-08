package com.isamm.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table( name="depots" )
public class Depots {

	
	@Id
	@GeneratedValue( strategy = GenerationType.AUTO )
	private long id;
	
	@Column( name="depot_name", nullable = false )
	private String name;
	
	private String address;

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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Depots() {
		super();
	}
	
	
	
}
