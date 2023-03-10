import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  postData(data: any) {
    return this._http.post<any>("http://localhost:3000/posts", data).pipe(map((res: any) => {

    }))

  }

  getData(data: any) {
    return this._http.get<any>("http://localhost:3000/posts", data).pipe(map((res: any) => {
      return res;
    }))

  }

  updateData(data: any, id: number) {
    return this._http.put<any>("http://localhost:3000/posts/" + id, data).pipe(map((res: any) => {
      return res;
    }))

  }
}
