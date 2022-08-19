import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _httpClient: HttpClient, private _router: Router) {
    if (localStorage.getItem('loginToken')) {
      this.saveUser();
    }
  }

  userData: BehaviorSubject<any> = new BehaviorSubject(null);
  register(userRegisterData: User): Observable<any> {
    return this._httpClient.post(
      'https://route-egypt-api.herokuapp.com/signup',
      userRegisterData
    );
  }
  signIn(userSignInData: User): Observable<any> {
    return this._httpClient.post(
      'https://route-egypt-api.herokuapp.com/signin',
      userSignInData
    );
  }

  logout() {
    localStorage.removeItem('loginToken');
    this.userData.next(null);
    this._router.navigate(['/login']);
  }

  saveUser() {
    let userToken = localStorage.getItem('loginToken');
    // if to check their is data and not null or we can use JSON.strigify(localStorage.getItem('loginToken'));
    if (userToken) {
      let data = jwt_decode(userToken);
      this.userData.next(data);
      // console.log(data);
    }
  }
}
