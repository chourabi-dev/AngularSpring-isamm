import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-buttons',
  templateUrl: './social-buttons.component.html',
  styleUrls: ['./social-buttons.component.css']
})
export class SocialButtonsComponent implements OnInit {

  @Input() nbrLikes;

  constructor() { }

  ngOnInit(): void {
  }

  putLike(){
    this.nbrLikes++;
  }

}
