import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MovieTvDiscoverService } from '../../movie-tv-discover.service';
import { People } from '../../homeInterface/people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  constructor(private _movieTvDiscoverService: MovieTvDiscoverService) {}
  imgsrc: string = 'https://image.tmdb.org/t/p/w500';
  allPeople: People[] = [];
  pageNumber: number = 1;
  peoplePageId: number = 1;
  getData() {
    this._movieTvDiscoverService
      .getPopularPeople(this.pageNumber)
      .subscribe((response) => {
        this.allPeople = response.results;
        this.peoplePageId = response.page;
      });
  }
  ngOnInit(): void {
    this.getData();
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
