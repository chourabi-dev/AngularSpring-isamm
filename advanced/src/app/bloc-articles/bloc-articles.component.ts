import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloc-articles',
  templateUrl: './bloc-articles.component.html',
  styleUrls: ['./bloc-articles.component.css']
})
export class BlocArticlesComponent implements OnInit {

  // array <= DATABASE :'(

  articles = [
    { id:1, title:"hello world", content:"this is a small description !! ", nbrLikes : 50 },
    { id:2, title:"hello world 1", content:"this is a small description !! ", nbrLikes : 15 },
    { id:3, title:"hello world 2", content:"this is a small description !! ", nbrLikes : 16 },
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
