import { Publicacion } from './model/publicacion';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material';
import {FormBuilder, FormGroup, Validators , ValidatorFn, AbstractControl, FormControl, ReactiveFormsModule} from '@angular/forms';
import { catchError, map, tap, startWith, switchMap, debounceTime, distinctUntilChanged, takeWhile, first } from 'rxjs/operators';
import { Autor } from './model/autor';
import { ResponseSearch } from './model/response';
import { and } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  autores: Observable<Autor[]>;
  publicaciones: Observable<Publicacion[]>;
  autor = {} as Autor;
  pages: number;
  filterTitle = '';
  currentPage = 1;
  objectData: ResponseSearch = {
    count: 0,
    pages: 0,
    data: new Array()
  };


  constructor(public data: DataService) { }

  OnInit() {
    this.getAutores();
  }

  getAutores() {
    this.autores = this.data.getAutores();
  }

  getPublicacionesByAutor() {
    this.data.getPublicaciones(this.autor.kAutor, this.currentPage).subscribe((data) => {
        this.objectData = data;

        if (this.filterTitle !== '') {
          if (this.objectData.data.length > 0) {
            const filtered = this.objectData.data.filter(post => post.Titulo.includes(this.filterTitle));
            this.objectData.data = filtered;
          }
        }
    });
  }

  changeAutor(value) {
    this.autor.kAutor = value;
  }

  navigatePrev() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
    this.getPublicacionesByAutor();
  }

  navigateNext() {
    if ((this.currentPage < this.objectData.pages) && this.objectData.pages > 1) {
      this.currentPage++;
    }
    this.getPublicacionesByAutor();
  }

  buscar() {
    this.currentPage = 1;
    this.getPublicacionesByAutor();
  }

}
