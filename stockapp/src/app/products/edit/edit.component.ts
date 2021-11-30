import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  formData = new FormGroup({
    name: new FormControl('',Validators.required),
    quantity: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    depot: new FormControl('',Validators.required),
    
  })

  depos = [];


  successMessage = '';

  id;

  constructor(private api:ApiService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getData();

    this.id = this.route.snapshot.params.id;
    this.getOldData();
  }


  getOldData(){
    this.api.findProductById(this.id).toPromise().then((res:any)=>{
      this.formData.setValue(res);
    })
  }


  getData(){
    this.api.getDeposList().toPromise().then((res:any[])=>{
      this.depos = res;
    })
  }


  saveDATA(){
    const data = this.formData.value;
 
    this.api.updateProduct(data,this.id).toPromise().then( (res:any)=>{
      if (res.id) {
        this.successMessage='Updated successfully !!'
      }
    } )

  }



}
