import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvDetails } from '../../tv-details';
import { HomeDataService } from '../../home-data.service';
import { DomSanitizer } from '@angular/platform-browser';
import { keyframes } from '@angular/animations';

@Component({
    selector: 'app-tv-details',
    templateUrl: './tv-details.component.html',
    styleUrls: ['./tv-details.component.scss'],
    standalone: false
})
export class TvDetailsComponent implements OnInit {
  tvId: number = 0;
  videos: any[] = [];
  genre: string = 'tv';
  tvDetails: TvDetails = {} as TvDetails;
  trailerKey: string = '';
  viedoSrc: string = '';
  imgSrc: string = 'https://image.tmdb.org/t/p/w500';
  constructor(
    private _homeDataService: HomeDataService,
    private _activatedRoute: ActivatedRoute,
    private _sanitizer: DomSanitizer
  ) {}
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
    this.tvId = this._activatedRoute.snapshot.params['id'];
    this._homeDataService
      .getDetails(this.genre, this.tvId)
      .subscribe((response) => {
        this.tvDetails = response;
      });
    this._homeDataService
      .getVideos(this.genre, this.tvId)
      .subscribe((response) => {
        this.videos = response.results;
        this.getTrailer();
      });
  }
}
