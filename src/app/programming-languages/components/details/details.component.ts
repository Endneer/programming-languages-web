import { Component, OnInit, Input } from '@angular/core';
import { ProgrammpingLanguageService } from '@core/services/http/programmping-language.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  languageName: string;
  details;

  constructor(private client: ProgrammpingLanguageService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.languageName = this.route.snapshot.paramMap.get('languageName');
    this.client.getDetails(this.languageName).subscribe(res => this.details = res);
  }

}
