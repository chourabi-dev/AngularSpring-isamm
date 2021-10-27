import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsPageComponent } from './produits-page/produits-page.component';
import { MyFavouritsComponent } from './my-favourits/my-favourits.component';
import { ProductDetailsPageComponent } from './product-details-page/product-details-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewTypesComponent } from './new-types/new-types.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsPageComponent,
    MyFavouritsComponent,
    ProductDetailsPageComponent,
    NavbarComponent,
    NewTypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
