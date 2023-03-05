import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {FakeHttpService} from '../../fake-http.service';

@Injectable()
export class DictionaryService {

  constructor(private http: FakeHttpService) {
  }

  get(): Observable<any> {
    return this.http.getAll();
  }

  save(data: any): Observable<any> {
    return this.http.add(data);
  }
}
