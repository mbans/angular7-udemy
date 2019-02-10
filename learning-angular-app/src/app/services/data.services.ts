import { BadInput } from '../common/bad-input';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { filter, map, catchError } from 'rxjs/operators';
import { Observable, throwError, ArgumentOutOfRangeError } from 'rxjs'
import { NotFoundError } from '../common/not-found-error';
import { AppError } from './../common/app-error';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string, private http: Http) { 
  }

  getAll() {
    return this.http.get(this.url).pipe(
                map(response => response.json()),
                catchError(this.handleError));
  }

  create(resource) {
    return this.http.post(this.url,JSON.stringify(resource)).pipe(
                  map(response => response.json()),
                  catchError(this.handleError))
  }

  udpdate(resource) {
    return this.http.patch(this.url + "/" + resource.id, JSON.stringify({isRead:true})).pipe(
                    map(response => response.json()),
                    catchError(this.handleError));
  }

  delete(id) {
    return this.http.delete(this.url + "/" + id).pipe(
                map(response => response.json()),
                catchError(this.handleError))
  }

  private handleError(error: Response) {
    if (error.status === 404) {
      return throwError(new NotFoundError());
    }
    else if (error.status === 400) {
      return throwError(new BadInput(error.json()))
    }
    else {
      return throwError(new AppError(error.json()));
    }

  }
}
