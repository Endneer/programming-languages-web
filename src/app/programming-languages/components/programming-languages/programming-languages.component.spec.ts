import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProgrammingLanguagesComponent } from './programming-languages.component';
import { ToSquareMatrixPipe } from '@shared/pipes/to-square-matrix.pipe';
import { Provider } from '@angular/core';
import { ProgrammpingLanguageService } from '@core/services/http/programmping-language.service';
import { of } from 'rxjs';

describe('ProgrammingLanguagesComponent', () => {
  let component: ProgrammingLanguagesComponent;
  let fixture: ComponentFixture<ProgrammingLanguagesComponent>;

  const clientSpy = jasmine.createSpyObj('ProgrammpingLanguageService', ['getAll', 'like', 'dislike']);
  clientSpy.getAll.and.returnValue(of([]));
  clientSpy.like.and.returnValue(of((null)));
  clientSpy.dislike.and.returnValue(of(null));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgrammingLanguagesComponent, ToSquareMatrixPipe],
      imports: [RouterTestingModule],
      providers: [{ provide: ProgrammpingLanguageService, useValue: clientSpy }] as Provider[]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammingLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('like should call http like', () => {
    const likes = 5;
    const language = { name: 'name', likes };
    component.like(language);
    expect(clientSpy.like).toHaveBeenCalledWith(language);
    expect(language.likes).toBe(likes + 1);
  });

  it('dislike should call http dislike', () => {
    const likes = 5;
    const language = { name: 'name', likes };
    component.dislike(language);
    expect(clientSpy.dislike).toHaveBeenCalledWith(language);
    expect(language.likes).toBe(likes - 1);
  });
});
