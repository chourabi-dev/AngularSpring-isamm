import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  count = 0;
  isConnected = false;

  constructor(private products:ProductsService, private router:Router) { }

  ngOnInit(): void {
    this.count = this.products.getFavouritsCount();

    const token = localStorage.getItem('ISAMM-token');

    if (token != null) {
      this.isConnected = true;
    }
  }


  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/authentification')
  }

}
