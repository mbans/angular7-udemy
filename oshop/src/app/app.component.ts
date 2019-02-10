import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private userService: UserService, private auth: AuthService, router: Router) {

    // When the user logs in we will retrieve the 'returnUrl' from localStorage and
    // redirect.
    // The 'returnUrl' is set within the AuthService when we login, we retrieve the URL that was accessed at time of loggin in
    // then when the user has logged in we then redirect to that url
    auth.user$.subscribe(user => {

      // user is a 'firebase.user' that is returned
      if (!user) {
        return;
      }

      // Each time the user logs in we will save/update them
      userService.save(user);

      const returnUrl = localStorage.getItem('returnUrl');

      if (!returnUrl) {
        return;
      }

      localStorage.removeItem('returnUrl');
      router.navigateByUrl(returnUrl);
    });
  }
}
