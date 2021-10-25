import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-produits-page',
  templateUrl: './produits-page.component.html',
  styleUrls: ['./produits-page.component.css']
})
export class ProduitsPageComponent implements OnInit {

  imageListProducts:any[] = [];
  constructor(private products:ProductsService,private router:Router) { }

  ngOnInit(): void {
    // init image, => *ngFor

    this.imageListProducts = this.products.getProductsList();
  }

  goToDetails(produit){
    // je pass tt les donnés !!
    //this.router.navigate(['/details/'+produit.id,produit])

    this.router.navigateByUrl('/details/'+produit.id);

  }

}
