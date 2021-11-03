import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MovieDetailsPageComponent } from './movie-details-page/movie-details-page.component';


const routes: Routes = [
  { path:'' , redirectTo:'home', pathMatch:'full' },
  { path:'home', component: HomePageComponent },
  { path:'home/movie/details/:id', component:MovieDetailsPageComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
