import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeDataService } from './../../home-data.service';
import { MovieDetails } from './../../homeInterface/movie-details';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _homeDataService: HomeDataService
  ) {}
  movieDetails: MovieDetails = {} as MovieDetails;
  movieId: number = 0;
  imgSrc: string = 'https://image.tmdb.org/t/p/w500';
  ngOnInit(): void {
    this.movieId = this._activatedRoute.snapshot.params['id'];
    // console.log(this.movieId);
    this._homeDataService
      .getMovieDetails(this.movieId)
      .subscribe((response) => {
        this.movieDetails = response;
        // console.log(this.movieDetails);
      });
  }
}
