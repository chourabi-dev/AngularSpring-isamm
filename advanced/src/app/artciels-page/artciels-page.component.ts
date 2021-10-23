import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artciels-page',
  templateUrl: './artciels-page.component.html',
  styleUrls: ['./artciels-page.component.css']
})
export class ArtcielsPageComponent implements OnInit {

  articles = [
    { id:1, title:'hello world 1' },
    { id:2, title:'hello world 2' },
    { id:3, title:'hello world 3' },
    { id:4, title:'hello world 4' },
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
