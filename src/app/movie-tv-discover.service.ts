import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieTvDiscoverService {
  constructor(private _httpClient: HttpClient) {}

  getMovieDiscover(id: number): Observable<any> {
    return this._httpClient.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=8c0c67ede7753d32e8b697785e237caf&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${id}&with_watch_monetization_types=flatrate`
    );
  }
  getTvDiscover(id: number): Observable<any> {
    return this._httpClient.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=8c0c67ede7753d32e8b697785e237caf&language=en-US&sort_by=popularity.desc&page=${id}&with_watch_monetization_types=flatrate`
    );
  }
  getPopularPeople(id: number): Observable<any> {
    return this._httpClient.get(
      ` https://api.themoviedb.org/3/person/popular?api_key=8c0c67ede7753d32e8b697785e237caf&language=en-US&page=${id}`
    );
  }
}
