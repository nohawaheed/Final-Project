import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { MovieTvDiscoverService } from 'src/app/movie-tv-discover.service';
import { Tv } from './../../homeInterface/tv';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss'],
})
export class TvComponent implements OnInit {
  constructor(
    private _movieTvDiscoverService: MovieTvDiscoverService,
    private _activatedRoute: ActivatedRoute
  ) {}
  allTv: Tv[] = [];
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
      .getTvDiscover(this.pageNumber)
      .subscribe((response) => {
        this.allTv = response.results;
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
