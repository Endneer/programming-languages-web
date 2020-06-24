import { Component, OnInit } from '@angular/core';
import { ProgrammpingLanguageService } from 'src/app/core/services/http/programmping-language.service';
import { groupBy } from '@shared/utils/group-by';

@Component({
  selector: 'app-programming-languages',
  templateUrl: './programming-languages.component.html',
  styleUrls: ['./programming-languages.component.css']
})
export class ProgrammingLanguagesComponent implements OnInit {
  languages;
  categories;

  constructor(private client: ProgrammpingLanguageService) { }

  ngOnInit() {
    this.client.getAll().subscribe(res => {
      this.languages = res;
      this.categories = groupBy(this.languages, 'category');
    });
  }

  like(language: { name: string, likes: number }) {
    this.client.like(language).subscribe(() => language.likes++);
  }

  dislike(language: { name: string, likes: number }) {
    this.client.dislike(language).subscribe(() => language.likes--);
  }

}
