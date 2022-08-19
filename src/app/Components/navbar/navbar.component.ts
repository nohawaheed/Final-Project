import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  userIsLogin: boolean = false;
  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this._authService.userData.subscribe((result) => {
      if (result) {
        this.userIsLogin = true;
      } else {
        this.userIsLogin = false;
      }
    });
  }
  userLogout() {
    this._authService.logout();
  }
}
