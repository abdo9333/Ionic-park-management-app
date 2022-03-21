import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Handicap } from '../handicap/handicap.model';

const baseUrl = 'http://192.168.33.10:3002/handicap';
@Injectable({
  providedIn: 'root'
})
export class HandicapService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Handicap[]> {
    return this.http.get<Handicap[]>(baseUrl);
  }
  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/handicap/${id}`);
  }
}
