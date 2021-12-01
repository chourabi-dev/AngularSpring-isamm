import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  formData = new FormGroup({
    name: new FormControl('',Validators.required), 
    address: new FormControl('',Validators.required), 
    
  })
 

  successMessage = '';
  constructor(private api:ApiService) { }

  ngOnInit(): void {
 
  }

  
  saveDATA(){
    const data = this.formData.value;

    this.api.addNewDepot(data).toPromise().then( (res:any)=>{
      if (res.id) {
        this.successMessage='Addedd successfully !!'
      }
    } )

  }
}
