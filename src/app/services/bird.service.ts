import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bird } from '../bird/bird.model';

const baseUrl = 'http://192.168.33.10:3002/bird';

@Injectable({
  providedIn: 'root'
})
export class BirdService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Bird[]> {
    return this.http.get<Bird[]>(baseUrl);
  }
  get(id: any): Observable<Bird> {
    return this.http.get(`${baseUrl}/${id}`);
  }
}
