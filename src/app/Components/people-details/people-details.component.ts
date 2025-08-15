import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeDataService } from '../../home-data.service';
import { PeopleDetails } from '../../people-details';

@Component({
    selector: 'app-people-details',
    templateUrl: './people-details.component.html',
    styleUrls: ['./people-details.component.scss'],
    standalone: false
})
export class PeopleDetailsComponent implements OnInit {
  constructor(
    private _homeDataService: HomeDataService,
    private _activatedRoute: ActivatedRoute
  ) {}
  peoleDetails: PeopleDetails = {} as PeopleDetails;
  personId: number = 0;
  imgSrc: string = 'https://image.tmdb.org/t/p/w500';
  urlSrc: string = 'https://www.imdb.com/name/';
  showMore = false;
  personBio: string = '';
  showLess: string[] = [];

  getData() {
    this._homeDataService
      .getPersonDetails(this.personId)
      .subscribe((response) => {
        this.peoleDetails = response;
        this.personBio = this.peoleDetails.biography;
        this.showLess = this.personBio.split('.', 3);
      });
  }
  ngOnInit(): void {
    this.personId = this._activatedRoute.snapshot.params['id'];
    this.getData();
  }
  toggleShow() {
    if (this.showMore) {
      this.getData();
      this.showMore = false;
      return this.personBio;
    } else {
      this.getData();
      this.showMore = true;
      return this.showLess;
    }
  }
}
