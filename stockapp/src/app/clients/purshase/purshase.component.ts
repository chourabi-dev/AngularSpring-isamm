import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-purshase',
  templateUrl: './purshase.component.html',
  styleUrls: ['./purshase.component.css']
})
export class PurshaseComponent implements OnInit {

 

  formData = new FormGroup({ 
    quantity: new FormControl('',Validators.required), 
    product: new FormControl('',Validators.required), 
    client: new FormControl(this.route.snapshot.params.id)
  })


  products = [];

  orders = [];

  successMessage = '';


  constructor(private route:ActivatedRoute, private api:ApiService) { }

  ngOnInit(): void {
    this.api.getProductsList().toPromise().then((res:any[])=>this.products = res);
  }

  addOrder(){
    let order = this.formData.value;

    if (order.client == null) {
      order.client = this.route.snapshot.params.id;
    }
    this.orders.push(order);

    this.formData.reset();
    
  }

  deleteByIndex(i){
    this.orders.splice(i,1);
  }


  sendOrdersToServer(){
    this.api.placeOrders(this.orders).toPromise().then((res:any)=>{
      if (res.success) {
          this.successMessage = res.message;
      }
    })
  }

}
