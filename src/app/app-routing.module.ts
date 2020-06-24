import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes = [
  { path: '', redirectTo: 'programming-languages', pathMatch: 'prefix' },
  {
    path: 'programming-languages',
    loadChildren: () => import('./programming-languages/programming-languages.module').then(m => m.ProgrammingLanguagesModule)
  }
] as Routes;

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
