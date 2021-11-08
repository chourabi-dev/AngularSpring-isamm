package com.isamm.response;

public class UserModelResponse {

	private String username;
	private String email;
	private int cin = 18181818;
	 
	public int getCin() {
		return cin;
	}
	
	
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	public UserModelResponse() {
		super();
	}
	
	
	
	
	
}
