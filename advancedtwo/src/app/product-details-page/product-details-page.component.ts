import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css']
})
export class ProductDetailsPageComponent implements OnInit {

  id;
  product:any = null;

  constructor(private route:ActivatedRoute,private products:ProductsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.getProductInformations();
  }


  getProductInformations(){
   const res =  this.products.findById(this.id); 
   this.product = res;
   
  }


  addToMyFavs(){
    this.products.addProductToFavList(this.product);
  }
}
