import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  authForm = new FormGroup({
    username : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    
  })
  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  connect()
  {
    // HTTP POST username password , check => success


    if (this.authForm.value.username ==='admin' && this.authForm.value.password === 'admin') {
      const token = new Date().getTime();

      // save the token in the localstorage !!
      localStorage.setItem('ISAMM-token',token.toString());

      // redirect 
      this.router.navigateByUrl('/products')

    } else {
      alert("Wrong username or password")
    }

     
    
  }
}
