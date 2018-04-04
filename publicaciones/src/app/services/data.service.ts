import { Publicacion } from './../model/publicacion';
import { Autor } from './../model/autor';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ResponseSearch } from '../model/response';

@Injectable()
export class DataService {
  domain = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getAutores(): Observable<Autor[]> {
    return this.http.get<Autor[]>(this.domain + '/autor/all');
  }

  getPublicaciones(kAutor: number, page: number): any {
    return this.http.get(this.domain + `/publicacion/all/${kAutor}/${page}`);
  }
}
