import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form = new FormGroup({ 
    username: new FormControl(''), 
    password: new FormControl('')
  })
  constructor(private auth:AuthService,private router:Router) { }

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

    this.auth.signin(data).toPromise().then((res:any)=>{
      console.log(res);

      let token = res.tokenType+' '+res.accessToken;

      localStorage.setItem('mytoken',token);

      this.router.navigateByUrl('/');

      
    })
  }
}
