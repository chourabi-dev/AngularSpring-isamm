import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  // normally , list , provided , server :/
  private products:any[] = [
    { id:1, title:"Samsung A51" , price:1200 , description:`Shipping:
    $29.00 Standard International Shipping | See details
    International shipment of items may be subject to customs processing and additional charges.  
     
    Located in:
    AMBALA SADAR, HARYANA, India
    Delivery:
    Estimated between Fri. Nov. 12 and Thu. Nov. 25` , photoURL :'https://i.ebayimg.com/images/g/1goAAOSwnpleORr1/s-l300.jpg' },


    { id:2, title:"IPhoneX" , price:1500 , description:`Shipping:
    $29.00 Standard International Shipping | See details
    International shipment of items may be subject to customs processing and additional charges.  
     
    Located in:
    AMBALA SADAR, HARYANA, India
    Delivery:
    Estimated between Fri. Nov. 12 and Thu. Nov. 25` , photoURL :'https://cdn.shopify.com/s/files/1/0247/7191/9925/products/a_b98aeb04-20ee-419b-998f-010963612c73_1024x1024.jpg?v=1619872882' },
    
  ]



  private myFavourites:any[] = [];
  private countmyFavourites = 0;
  

  constructor() { }


  getProductsList(){
    return this.products;
  }


  findById(id){
    let search  = this.products.filter( p => p.id == id );

    if (search.length == 1) {
      return search[0];
    } else {
      // redirirect to 404 !!
    }
  }



  // length t0
  // length t1 5
  getFavouritsCount(){
    return this.countmyFavourites;
  }


  addProductToFavList(p){
    this.myFavourites.push(p);
    this.countmyFavourites ++;
 
    
  }


  getMyFavProducts(){
    return this.myFavourites;
  }



}
