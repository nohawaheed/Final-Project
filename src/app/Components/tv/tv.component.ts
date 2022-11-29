import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MovieTvDiscoverService } from 'src/app/movie-tv-discover.service';
import { Tv } from './../../homeInterface/tv';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss'],
})
export class TvComponent implements OnInit {
  constructor(private _movieTvDiscoverService: MovieTvDiscoverService) {}
  allTv: Tv[] = [];
  pageNumber: number = 1;
  imgsrc: string = 'https://image.tmdb.org/t/p/w500';
  getData() {
    this._movieTvDiscoverService
      .getTvDiscover(this.pageNumber)
      .subscribe((response) => {
        this.allTv = response.results;
      });
  }
  ngOnInit(): void {
    this.getData();
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
