import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MovieTvDiscoverService } from './../../movie-tv-discover.service';
import { Movies } from './../../homeInterface/movies';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  constructor(
    private _movieTvDiscoverService: MovieTvDiscoverService,
    private _activatedRoute: ActivatedRoute
  ) {}
  allMovies: Movies[] = [];
  pageNumber: number = 1;
  imgsrc: string = 'https://image.tmdb.org/t/p/w500';
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(
      (paramMap) => (this.pageNumber = Number(paramMap.get('id')))
    );
    this.getData();
  }

  getData() {
    this._movieTvDiscoverService
      .getMovieDiscover(this.pageNumber)
      .subscribe((response) => {
        this.allMovies = response.results;
      });
  }
  changePage(event: PageEvent) {
    event.pageIndex++;
    if (this.pageNumber > event.pageIndex) {
      this.pageNumber = event.pageIndex--;
      this.getData();
    } else {
      this.pageNumber = event.pageIndex++;
      this.getData();
    }
  }
}
