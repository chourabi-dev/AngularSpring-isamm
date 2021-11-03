import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.css']
})
export class MovieDetailsPageComponent implements OnInit {

  id;
  movie = null;

  isLoading = true;

  constructor(private route:ActivatedRoute, private movieService:MoviesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.getMovieDetails();
  }


  getMovieDetails(){
    this.movieService.findById(this.id).toPromise().then((res:any)=>{
      console.log(res);
      
      this.movie = res.data.movie;
      this.isLoading = false;
    })
  }

}
