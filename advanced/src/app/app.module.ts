import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { BlocArticlesComponent } from './bloc-articles/bloc-articles.component';
import { ArticleComponent } from './article/article.component';
import { SocialButtonsComponent } from './social-buttons/social-buttons.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { TeamComponent } from './team/team.component';
import { HistroyComponent } from './histroy/histroy.component';
import { ArtcielsPageComponent } from './artciels-page/artciels-page.component';
import { ArticlDetailsPageComponent } from './articl-details-page/articl-details-page.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidemenuComponent,
    BlocArticlesComponent,
    ArticleComponent,
    SocialButtonsComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    TeamComponent,
    HistroyComponent,
    ArtcielsPageComponent,
    ArticlDetailsPageComponent,
    NotfoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
