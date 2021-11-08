package com.isamm.controllers;

import org.springframework.http.HttpRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.isamm.request.UserAddModel;
import com.isamm.response.UserAddResponse;
import com.isamm.response.UserModelResponse;

// REST controller because we will be working with json

@RestController
@RequestMapping("/app")
public class AppController {
	
	
	// GET
	@GetMapping("/hello")
	String sayHello() {
		return "hello world";
	}
	
	
	// X et Y return x+y
	@GetMapping("/somme")                                   // CAST
	int somme( @RequestParam( required = true ) int x ,@RequestParam( required = true ) int y) {
		return ( x + y );
		
	}
	
	
	// find user by cin
	@GetMapping("/user/{cin}")
	String  findUserByCin(@PathVariable() String cin ) {
		return "getting user data  cin :".concat(cin);
	}
	
	// custom response
	
	@GetMapping("/find/user")
	UserModelResponse findUser(){
		UserModelResponse user = new UserModelResponse();
		
		user.setEmail("tchourabi@gmail.com");
		user.setUsername("tchourabi");
		
		return user;
	}
	
	
	
	@PostMapping("/user/add")
	UserAddResponse addUser( @RequestBody() UserAddModel tmp ) {
		// we need fullname , email , password
		
		
		UserAddResponse res = new UserAddResponse();
		
		res.setSuccess(true);
		res.setMessage(tmp.getFullname().concat(" added successfully.")  );
		
		return res;
		
		// { succes : true, message: fullname , added successfully } 
		
	}
	

}
