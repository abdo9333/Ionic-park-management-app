import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sport } from '../sport/sport.model';

const baseUrl = 'http://192.168.33.10:3002/sport';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Sport[]> {
    return this.http.get<Sport[]>(baseUrl);
  }
  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/sport/${id}`);
  }
}
