import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { map } from 'rxjs/operators';
import { RouterStateSnapshot } from '@angular/router';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {
  }

  // Using the 'RouterStateSnapshot' we can get access to the url the user was accessing when the hit the page
  canActivate(route, state: RouterStateSnapshot): Observable<boolean> {
    // If the authService has a user assigned i.e. a user is logged in,
    // then we will return true and allow access, otherwise we redirect the user to the login page
    // The 'AuthGuard' is registered in the app.module.ts on the 'checkout' route
    return this.auth.user$.pipe(
      map(user => {
          if (user) {
            console.log('User is logged in access allowed');
            return true;
          }
          console.log('Navigating to /login');
          this.router.navigate(['/login'], { queryParams: {returnUrl: state.url}});
          return false;
        }
      ) // map
    ); // pipe
  }

}
