import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HomeDataService {
  constructor(private _httpClient: HttpClient) {}

  getTrending(type: string): Observable<any> {
    return this._httpClient.get(
      `https://api.themoviedb.org/3/trending/${type}/day?api_key=8c0c67ede7753d32e8b697785e237caf`
    );
  }
  getMovieDetails(id: number): Observable<any> {
    return this._httpClient.get(
      ` https://api.themoviedb.org/3/movie/${id}?api_key=8c0c67ede7753d32e8b697785e237caf&language=en-US`
    );
  }
}
