import { BadInput } from '../common/bad-input';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { filter, map, catchError } from 'rxjs/operators';
import { Observable, throwError, ArgumentOutOfRangeError } from 'rxjs'
import { NotFoundError } from '../common/not-found-error';
import { AppError } from './../common/app-error';
import { DataService } from './data.services';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {
  constructor(http: Http) { 
    super('http://jsonplaceholder.typicode.com/posts', http);
  }
}
