import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgrammingLanguagesComponent } from './components/programming-languages/programming-languages.component';
import { DetailsComponent } from './components/details/details.component';

const routes = [
  { path: '', component: ProgrammingLanguagesComponent },
  { path: 'details/:languageName', component: DetailsComponent },
] as Routes;

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgrammingLanguagesRoutingModule { }
