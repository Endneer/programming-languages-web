import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    @Inject('PROGRAMMING_LANGUAGE_BASE_API_URL') private baseUrl: string,
    private client: HttpClient) {
  }

  public handleError(err: Error) {
    err = { name: err.name, message: err.message, stack: err.stack };
    this.client.post(`${this.baseUrl}/error`, err).subscribe();
  }

}
