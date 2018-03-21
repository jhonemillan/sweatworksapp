import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '',   component: AppComponent},  
  { path: '**', redirectTo: '' }
];  

@NgModule({
  declarations: [    
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes      
    ) 
  ],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }