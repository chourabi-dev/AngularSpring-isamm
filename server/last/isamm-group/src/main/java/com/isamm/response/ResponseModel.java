package com.isamm.response;

public class ResponseModel {

	private boolean success;
	private String message;
	
	

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}
	
	public ResponseModel() {}

	public ResponseModel(boolean success, String message) {
		super();
		this.success = success;
		this.message = message;
	}
	
	
	
}
