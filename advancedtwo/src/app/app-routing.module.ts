import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyFavouritsComponent } from './my-favourits/my-favourits.component';
import { ProductDetailsPageComponent } from './product-details-page/product-details-page.component';
import { ProduitsPageComponent } from './produits-page/produits-page.component';


const routes: Routes = [
  { path:'', component:ProduitsPageComponent },
  { path:'products', component:ProduitsPageComponent },
  { path:'details/:id', component: ProductDetailsPageComponent },
  { path:'my-favourits', component:MyFavouritsComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
