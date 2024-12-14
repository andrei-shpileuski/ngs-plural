import { TranslatePluralPipe } from './translate-plural.pipe';
import { PluralizationService } from '../services/injectable/pluralization.service';
import { TranslateService } from '@ngx-translate/core';
import { TestBed } from '@angular/core/testing';

describe('TranslatePluralPipe', () => {
  let pipe: TranslatePluralPipe;
  let pluralizationServiceMock: jasmine.SpyObj<PluralizationService>;
  let translateServiceMock: jasmine.SpyObj<TranslateService>;

  beforeEach(() => {
    const pluralizationSpy = jasmine.createSpyObj('PluralizationService', [
      'getPluralFormLocal',
    ]);
    const translateSpy = jasmine.createSpyObj('TranslateService', ['instant']);

    TestBed.configureTestingModule({
      providers: [
        TranslatePluralPipe,
        { provide: PluralizationService, useValue: pluralizationSpy },
        { provide: TranslateService, useValue: translateSpy },
      ],
    });

    pipe = TestBed.inject(TranslatePluralPipe);
    pluralizationServiceMock = TestBed.inject(
      PluralizationService,
    ) as jasmine.SpyObj<PluralizationService>;
    translateServiceMock = TestBed.inject(
      TranslateService,
    ) as jasmine.SpyObj<TranslateService>;
  });
});
