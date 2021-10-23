import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ArtcielsPageComponent } from './artciels-page/artciels-page.component';
import { ArticlDetailsPageComponent } from './articl-details-page/articl-details-page.component';
import { AuthGuard } from './auth.guard';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HistroyComponent } from './histroy/histroy.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';
import { TeamComponent } from './team/team.component';


const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'home', component:HomePageComponent },
  { path:'about', component:AboutPageComponent, children: [
    { path:'team' , component : TeamComponent },
    { path:'history' , component : HistroyComponent },
    
  ] },
  { path:'contact', component:ContactPageComponent , canActivate:[AuthGuard]},
  { path:'articles', component:ArtcielsPageComponent },
  { path:'article/details/:id', component:ArticlDetailsPageComponent },




  { path:'**', component:NotfoundPageComponent }
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
