import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ServerSideErrorHandler } from './utils/error.handler';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    { provide: 'PROGRAMMING_LANGUAGE_BASE_API_URL', useValue: environment.programmingLanguageApiUrl },
    { provide: ErrorHandler, useClass: ServerSideErrorHandler }
  ]
})
export class CoreModule { }
