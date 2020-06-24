import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgrammingLanguagesRoutingModule } from './programming-languages-routing.module';
import { ProgrammingLanguagesComponent } from './components/programming-languages/programming-languages.component';
import { SharedModule } from '@shared/shared.module';
import { DetailsComponent } from './components/details/details.component';



@NgModule({
  declarations: [ProgrammingLanguagesComponent, DetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProgrammingLanguagesRoutingModule
  ],
})
export class ProgrammingLanguagesModule { }
