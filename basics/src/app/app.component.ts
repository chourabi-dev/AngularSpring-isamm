import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /*title = "hello world";
  year = 2021;
  myFirstApp = false;


  contact = {
    email:'emaol@domaine.com',
    phone:'99887744'
  }


  employees = [
    {
      name:"chourabi taher",
      email:'tchourabi@gmail.com',
      year: 1990
    },
     
    {
      name:"chourabi taher",
      email:'tchourabi@gmail.com',
      year: 2007
    },
     
    {
      name:"chourabi taher",
      email:'tchourabi@gmail.com',
      year: 2020
    },
     
    {
      name:"chourabi taher",
      email:'tchourabi@gmail.com',
      year: 1990
    },
     
    
    
  ];

  currentIndex = 0;

  gallery = [
    'https://p4.wallpaperbetter.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg',
    "https://i.pinimg.com/originals/11/50/d8/1150d80e019d4563bda37eb4e48ee9bb.jpg",
    "https://hdfreewallpaper.net/wp-content/uploads/2020/10/HD-Vaporwave-wallpaper.jpg"

  ];


  constructor(){
    
    setInterval(()=>{
      this.currentIndex++;

      if (this.currentIndex == this.gallery.length) {
        this.currentIndex = 0;
      }

    },1000)
    
  }*/

  /******************************************************************************************** */

  /*email ='tchourabi@gmail.com';
  today = new Date()
  chiffre = 325521546325 
  amount  = 1200;*/


  employees = [];


  formIndex = 0;

  form = new FormGroup({
    username : new FormControl('' ,[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.min(8)]),
    address : new FormGroup({
      city: new FormControl('',Validators.required),
      code: new FormControl('',Validators.required)
    })
    
  });


  formTwo = new FormGroup({
    fullname: new FormControl('',Validators.required)
  })

  validateForm(){
    this.formIndex++;
  }
  constructor(){ 
  }


  ngOnInit(): void {
     console.log(this.form);
     
  }


  validateAll(){
    const formOne = this.form.value;
    const formTwo = this.formTwo.value;

    const all = {
      formOne: formOne,
      formTwo: formTwo
    }

    console.log(all);
    
    this.employees.push(formOne);
    this.form.reset();
    this.formIndex = 0;

  }



 



 


}
