import { map, flatMap, tap, switchMap } from 'rxjs/operators';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable} from 'rxjs';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) {
  }

  canActivate(): Observable<boolean> {
      return this.auth.user$.pipe(
          // flapmap prevents an Observable<Observable<AppUser>> being created, instead it will give us <Observable<AppUser>>
          flatMap(firebaseUser => this.userService.get(firebaseUser.uid).valueChanges()),

          // map the Observable<AppUser> to Observable<boolean>
          map(appUser => {
            console.log(appUser.name + ' is an admin=' + appUser.isAdmin);
            return appUser.isAdmin;
          })
      );
  }
}
