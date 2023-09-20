import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ResponseBody } from '../models/interfaces/response-body.interface';
// import  * as collection200  from 'src/assets/mock-data/collection200.json';

@Injectable({
  providedIn: 'root',
})
export class ParamsService {
  collection200 = require('src/assets/mock-data/collection200.json');
  collection400 = require('src/assets/mock-data/collection404.json');
  return200 = require('src/assets/mock-data/return200.json');
  return404 = require('src/assets/mock-data/return404.json');

  response$!: Observable<ResponseBody>;

  constructor(private http: HttpClient) {}

  getCollectionForCode(code: string): Observable<ResponseBody> {
    // response$ = this.http.post('api/collection', code);
    if (code === '12345') {
      this.response$ = of(this.collection200);
    } else {
      this.response$ = of(this.collection400);
    }
    return this.response$;
  }

  getReturnForCode(code: string) {
    // response$ = this.http.post('api/return', code);
    if (code === '12345') {
      this.response$ = of(this.return200);
    } else {
      this.response$ = of(this.return404);
    }
    return this.response$;

  }
}
