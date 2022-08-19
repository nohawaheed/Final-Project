import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit(): void {}
  callLogin: Subject<any> = new Subject();
  errorMessage: string = '';
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      (Validators.required, Validators.pattern(/^[A-Z][a-z]{4,6}$/)),
    ]),
  });
  loginUser(form: FormGroup) {
    if (form.valid) {
      this._authService
        .signIn(form.value)
        .pipe(takeUntil(this.callLogin))
        .subscribe((response) => {
          // console.log(response);
          if (response.message == 'success') {
            localStorage.setItem('loginToken', response.token);
            this._router.navigate(['/home']);
            this._authService.saveUser();
          } else {
            this.errorMessage = response.message;
          }
        });
    }
  }
  ngOnDestroy(): void {
    this.callLogin.unsubscribe();
  }
}
