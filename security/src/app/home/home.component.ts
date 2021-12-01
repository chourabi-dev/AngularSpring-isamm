import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user =null;

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.auth.getInfo().toPromise().then((res)=>{
      console.log(res);

      this.user =res;
      
    }

    )}

}
