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
      'https://exam.elevateegy.com/api/v1/auth/signup',
      userRegisterData
    );
  }
  signIn(userSignInData: User): Observable<any> {
    return this._httpClient.post(
      'https://exam.elevateegy.com/api/v1/auth/signin',
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
    // check if their is data and userToken is not null another way is to use JSON.strigify(localStorage.getItem('loginToken'));
    if (userToken) {
      let data = jwt_decode(userToken);
      this.userData.next(data);
      // console.log(data);
    }
  }
}
