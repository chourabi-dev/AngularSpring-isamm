import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  movies = [];
  isLoading = false;

  errorMessage = '';

  constructor(private moviesService : MoviesService) { }

  ngOnInit(): void {
    this.getMoviesList();
  }


  getMoviesList(){ 

    this.isLoading = true;

    this.moviesService.getMoviesList().toPromise().then((res:any) =>{
      console.log(res.data.movies); 
      this.movies = res.data.movies; 
    }).catch((err)=>{ 
      this.errorMessage='Something went wrong , please try again.' 
    }).finally(()=>{
      this.isLoading = false;
    })
  }


  searchingFor(e:any){
    const value = e.target.value;

    console.log(value);

    this.errorMessage='';
    this.isLoading= true;
    this.moviesService.getMoviesList(value).toPromise().then((res:any)=>{ 

      if (res.data.movies != null) {
        this.movies = res.data.movies;
      }else{
        this.errorMessage="Oups, looks like we don't have any movie.";
      }
      
    }).catch((err)=>{

    }).finally(()=>{
      this.isLoading = false;
    })
    

  }

}
