import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MovieTvDiscoverService } from './../../movie-tv-discover.service';
import { Movies } from './../../homeInterface/movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  constructor(private _movieTvDiscoverService: MovieTvDiscoverService) {}
  allMovies: Movies[] = [];
  pageNumber: number = 1;
  imgsrc: string = 'https://image.tmdb.org/t/p/w500';
  moviePageId: number = 1;

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._movieTvDiscoverService
      .getMovieDiscover(this.pageNumber)
      .subscribe((response) => {
        this.allMovies = response.results;
        this.moviePageId = response.page;
      });
  }
  getNextPage(event: PageEvent) {
    this.pageNumber = event.pageIndex++;
    this.getData();
  }
  getPreviousPage(event: PageEvent) {
    this.pageNumber = event.pageIndex--;
    this.getData();
  }
}