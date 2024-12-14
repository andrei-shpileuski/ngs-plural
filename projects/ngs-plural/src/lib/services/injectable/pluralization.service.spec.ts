import { TestBed } from '@angular/core/testing';
import { PluralizationService } from './pluralization.service';
import { ILangWordForms } from '../../models/interfaces/lang-word-forms.interface';
import { LanguageISO6391Enum } from '../../models/enums/language-iso-639-1.enum';
import { APPLES } from '../../models/consts/test-data';

describe('PluralizationService', () => {
  let service: PluralizationService;
  const appleForms: ILangWordForms = APPLES;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PluralizationService],
    });

    service = TestBed.inject(PluralizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return singular form for English (count = 1) with count', () => {
    const count = 1;
    const result = service.getPluralFormLocal(count, {
      lang: LanguageISO6391Enum.English,
      forms: appleForms,
    });
    expect(result).toBe(
      `${count} ${appleForms[LanguageISO6391Enum.English]![0]}`,
    );
  });

  it('should return singular form for English (count = 2) without count', () => {
    const count = 2;
    const result = service.getPluralFormLocal(
      count,
      {
        lang: LanguageISO6391Enum.English,
        forms: appleForms,
      },
      false,
    );
    expect(result).toBe(appleForms[LanguageISO6391Enum.English]![1]);
  });

  it('should return singular form for Russian (count = 1) with count', () => {
    const count = 1;
    const result = service.getPluralFormLocal(count, {
      lang: LanguageISO6391Enum.Russian,
      forms: appleForms,
    });
    expect(result).toBe(
      `${count} ${appleForms[LanguageISO6391Enum.Russian]![0]}`,
    );
  });

  it('should return singular form for Russian (count = 2) without count', () => {
    const count = 2;
    const result = service.getPluralFormLocal(
      count,
      {
        lang: LanguageISO6391Enum.Russian,
        forms: appleForms,
      },
      false,
    );
    expect(result).toBe(appleForms[LanguageISO6391Enum.Russian]![1]);
  });
});
