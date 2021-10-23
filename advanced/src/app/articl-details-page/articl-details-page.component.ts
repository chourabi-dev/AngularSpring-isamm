import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articl-details-page',
  templateUrl: './articl-details-page.component.html',
  styleUrls: ['./articl-details-page.component.css']
})
export class ArticlDetailsPageComponent implements OnInit {

  id;

  constructor(private route:ActivatedRoute ) { }

  ngOnInit(): void {
    console.log(this.route);
    const id = this.route.snapshot.params.id;
    this.id = id;
    
  }

}
