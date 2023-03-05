import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeHttpService {

  data: any[] = [];
  constructor() { }

  getAll(): Observable<any[]> {
    return of(this.data);
  }

  add(data: any): Observable<any> {
    this.data.push(data);
    return of(data);
  }

}
