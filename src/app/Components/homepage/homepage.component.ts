import { Component, OnInit } from '@angular/core';
import { HomeDataService } from './../../home-data.service';
import { Movies } from './../../homeInterface/movies';
import { Tv } from './../../homeInterface/tv';
import { People } from './../../homeInterface/people';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  allMovies: Movies[] = [];
  allTv: Tv[] = [];
  peoples: People[] = [];
  imgsrc: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private _homeDataService: HomeDataService) {}

  ngOnInit(): void {
    this._homeDataService.getTrending('movie').subscribe((response) => {
      this.allMovies = response.results.splice(0, 10);
      // console.log(this.allMovies);
    });
    this._homeDataService.getTrending('tv').subscribe((response) => {
      this.allTv = response.results.splice(0, 10);
      // console.log(this.allTv);
    });
    this._homeDataService.getTrending('person').subscribe((response) => {
      this.peoples = response.results.splice(0, 10);
      // console.log(this.peoples);
    });
  }
}
