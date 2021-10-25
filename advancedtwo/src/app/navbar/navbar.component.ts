import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  count = 0;

  constructor(private products:ProductsService) { }

  ngOnInit(): void {
    this.count = this.products.getFavouritsCount();
  }

}
