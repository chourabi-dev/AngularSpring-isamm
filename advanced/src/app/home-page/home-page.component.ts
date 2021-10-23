import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor( private router:Router ) { }

  ngOnInit(): void {
  }


  goToAboutPage(){
    // navigation 
    //this.router.navigateByUrl('/about');

    this.router.navigate(['/about',{ user:'chourabi taher', session:12545151, email:'tchourabi@gmail.com' }])
  }
}
