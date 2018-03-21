import { publicacion } from './../model/publicacion';
import { autor } from './../model/autor';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ResponseSearch } from '../model/response';

@Injectable()
export class DataService {
  domain:string ="http://localhost:3000/api";

  constructor(private http: Http) { }

  getAutores(): Observable<autor[]>{
    return this.http.get(this.domain + '/autor/all').map(res=> res.json()).catch(this.handleError);
  }

  getPublicaciones(kAutor:number, page:number):Observable<ResponseSearch>{    
    return this.http.get(this.domain +`/publicacion/all/${kAutor}/${page}`).map(res=> res.json()).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }

}
