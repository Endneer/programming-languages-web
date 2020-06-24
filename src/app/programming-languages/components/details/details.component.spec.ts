import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { ProgrammpingLanguageService } from '@core/services/http/programmping-language.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Provider } from '@angular/core';
import { of } from 'rxjs';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  const clientSpy = jasmine.createSpyObj('ProgrammpingLanguageService', ['getDetails']);
  clientSpy.getDetails.and.returnValue(of('some details'));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: ProgrammpingLanguageService, useValue: clientSpy }] as Provider[]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('details should be retrieved from API', () => {
    expect(component.details).toBe('some details');
  });
});
