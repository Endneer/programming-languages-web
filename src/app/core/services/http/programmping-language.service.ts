import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProgrammpingLanguageService {

  constructor(
    @Inject('PROGRAMMING_LANGUAGE_BASE_API_URL') private baseUrl: string,
    private client: HttpClient) {
  }

  public getAll() {
    return this.client.get(`${this.baseUrl}/programming-language`);
  }

  public getDetails(languageName: string) {
    return this.client.get(`${this.baseUrl}/programming-language/details/${encodeURIComponent(languageName)}`);
  }

  public like(language) {
    return this.client.post(`${this.baseUrl}/programming-language/like`, language);
  }

  public dislike(language) {
    return this.client.post(`${this.baseUrl}/programming-language/dislike`, language);
  }

}
