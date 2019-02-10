import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable, EMPTY, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { flatMap } from 'rxjs/operators';
import { AppUser } from './models/app-user';

@Injectable()
export class AuthService {

  user$: Observable<firebase.User>;

  constructor(
    private userService: UserService,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute) {
    this.user$ = afAuth.authState;
  }

  login() {
    // If there is no returnUrl set, then we use '/', so following login the user will be redirected to homepage
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  get appUser$(): Observable<AppUser>  {
    return this.user$.pipe(
      flatMap(firebaseUser => {
          if (firebaseUser) {
            return this.userService.get(firebaseUser.uid).valueChanges();
          }
          return EMPTY;
        }
      )
    );
  }
}
