import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-my-favourits',
  templateUrl: './my-favourits.component.html',
  styleUrls: ['./my-favourits.component.css']
})
export class MyFavouritsComponent implements OnInit {

  imageListProducts:any[] = [];

  constructor(private products:ProductsService) { }

  ngOnInit(): void {
    this.imageListProducts = this.products.getMyFavProducts();
  }

}
