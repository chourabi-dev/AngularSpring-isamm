import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    role  : new FormControl('user'),
  })
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }


  saveUser(){
    const data = {
      name: this.form.value.name,
      username: this.form.value.username,
      email: this.form.value.email,
      password: this.form.value.password,
      role: ["user"],
      
    }

    this.auth.signup(data).toPromise().then((res)=>{
      console.log(res);
      
    })
  }

}
