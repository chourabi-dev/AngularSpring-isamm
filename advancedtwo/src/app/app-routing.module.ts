import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { MyFavouritsComponent } from './my-favourits/my-favourits.component';
import { ProductDetailsPageComponent } from './product-details-page/product-details-page.component';
import { ProduitsPageComponent } from './produits-page/produits-page.component';


const routes: Routes = [
  { path:'', component:ProduitsPageComponent , canActivate:[AuthGuard] },
  { path:'products', component:ProduitsPageComponent, canActivate:[AuthGuard]  },
  { path:'details/:id', component: ProductDetailsPageComponent, canActivate:[AuthGuard]  },


  { path:'my-favourits', component:MyFavouritsComponent, canActivate:[AuthGuard]  },


  { path: 'authentification', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
