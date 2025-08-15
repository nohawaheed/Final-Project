import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { HomeDataService } from './../../home-data.service';
import { MovieDetails } from './../../homeInterface/movie-details';

@Component({
    selector: 'app-movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.scss'],
    standalone: false
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _homeDataService: HomeDataService,
    private _sanitizer: DomSanitizer
  ) {}
  movieDetails: MovieDetails = {} as MovieDetails;
  videos: any[] = [];
  genre: string = 'movie';
  trailerKey: string = '';
  viedoSrc: string = '';
  movieId: number = 0;
  imgSrc: string = 'https://image.tmdb.org/t/p/w500';
  getTrailer() {
    for (let i = 0; i < this.videos.length; i++) {
      if (this.videos[i].type == 'Trailer') {
        this.trailerKey = this.videos[i].key;
        break;
      }
    }
  }
  updateVideoUrl(key: string) {
    this.viedoSrc = 'https://www.youtube.com/embed/' + key;
    return this._sanitizer.bypassSecurityTrustResourceUrl(this.viedoSrc);
  }
  ngOnInit(): void {
    this.movieId = this._activatedRoute.snapshot.params['id'];
    // console.log(this.movieId);
    this._homeDataService
      .getDetails(this.genre, this.movieId)
      .subscribe((response) => {
        this.movieDetails = response;
        // console.log(this.movieDetails);
      });
    this._homeDataService
      .getVideos(this.genre, this.movieId)
      .subscribe((response) => {
        this.videos = response.results;
        this.getTrailer();
      });
  }
}
