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
    quantity: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    depot: new FormControl('',Validators.required),
    
  })

  depos = [];


  successMessage = '';
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.api.getDeposList().toPromise().then((res:any[])=>{
      this.depos = res;
    })
  }


  saveDATA(){
    const data = this.formData.value;

    this.api.addNewProduct(data).toPromise().then( (res:any)=>{
      if (res.id) {
        this.successMessage='Addedd successfully !!'
      }
    } )

  }


}
