import { DataService } from './services/data.service';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from "@angular/material";
import {FormBuilder, FormGroup, Validators , ValidatorFn, AbstractControl, FormControl, ReactiveFormsModule} from '@angular/forms';
import { catchError, map, tap,startWith, switchMap, 
         debounceTime, distinctUntilChanged, takeWhile, first } from 'rxjs/operators';
import { autor } from './model/autor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  autores: Observable<autor[]>
  autor = {} as autor;

  constructor(public data: DataService){}

  ngOnInit(){
    this.getAutores();
  }

  getAutores(){   
    this.autores = this.data.getAutores();   
  }

  getPublicacionesByAutor(kAutor){
    console.log(this.autor);
    //var test = this.data.getPublicaciones(kAutor,1);
    //console.log(test);
  }

}
