import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    last_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    age: new FormControl(null, [
      Validators.required,
      Validators.min(16),
      Validators.max(80),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z]{4,6}$/),
    ]),
  });
  callRegister: Subject<any> = new Subject();
  errorMessage: string = '';
  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit(): void {}

  registerUser(form: FormGroup) {
    if (form.valid) {
      this._authService
        .register(form.value)
        .pipe(takeUntil(this.callRegister))
        .subscribe((response) => {
          console.log(response);
          if (response.message == 'sucsess') {
            this._router.navigate(['/login']);
          } else {
            this.errorMessage = response.message;
          }
        });
    }
  }

  ngOnDestroy(): void {
    this.callRegister.unsubscribe();
  }
}
