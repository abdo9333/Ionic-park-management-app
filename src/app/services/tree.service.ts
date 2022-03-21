import { Injectable } from '@angular/core';
import { Tree } from '../tree/tree.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://192.168.33.10:3002/trees';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tree[]> {
    return this.http.get<Tree[]>(baseUrl);
  }
  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }
}
