import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit, OnDestroy {

  users = [];

  watcher;

  isLoading = true;

  constructor(private api:ApiService) { }

  
  ngOnDestroy(): void {
    this.watcher.unsubscribe();
  }

  ngOnInit(): void {
    this.updateUI();
  }

  updateUI(){
    /*this.watcher = this.api.getUsersList().subscribe((res:any)=>{
      console.log(res);
      this.users = res;
      
    },(err)=>{

    });*/

    this.api.getUsersList().toPromise().then((res:any)=>{
      console.log(res);
      this.users = res;
      this.isLoading = false;
    }).catch((err)=>{

    })
  }

}
