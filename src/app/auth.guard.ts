import { inject  } from '@angular/core';
import { CanActivateFn , ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) : 
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree => {
      const authService = inject(AuthService);
      const router = inject(Router);
     let userData = authService.userData.getValue();
    if (userData) {
      return true;
    } else {
      router.navigate(['/login']);
      return false;
    }
   
    };

