import { TestBed } from '@angular/core/testing';
import { PluralizationService } from './pluralization.service';
import { ILangWordForms } from '../../models/interfaces/lang-word-forms.interface';
import { LanguageISO6391Enum } from '../../models/enums/language-iso-639-1.enum';

describe('PluralizationService', () => {
  let service: PluralizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PluralizationService],
    });

    service = TestBed.inject(PluralizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return singular form for English (count = 1)', () => {
    const forms: ILangWordForms = {
      [LanguageISO6391Enum.English]: ['apple', 'apples'],
    };
    const result = service.getPluralFormLocal(
      1,
      LanguageISO6391Enum.English,
      forms,
    );
    expect(result).toBe('1 apple');
  });

  it('should return plural form for English (count > 1)', () => {
    const forms: ILangWordForms = {
      [LanguageISO6391Enum.English]: ['apple', 'apples'],
    };
    const result = service.getPluralFormLocal(
      3,
      LanguageISO6391Enum.English,
      forms,
    );
    expect(result).toBe('3 apples');
  });

  it('should return singular form for Russian (count = 1)', () => {
    const forms: ILangWordForms = {
      [LanguageISO6391Enum.Russian]: ['яблоко', 'яблока', 'яблок'],
    };
    const result = service.getPluralFormLocal(
      1,
      LanguageISO6391Enum.Russian,
      forms,
    );
    expect(result).toBe('1 яблоко');
  });

  it('should return correct plural form for Russian (count = 2)', () => {
    const forms: ILangWordForms = {
      [LanguageISO6391Enum.Russian]: ['яблоко', 'яблока', 'яблок'],
    };
    const result = service.getPluralFormLocal(
      2,
      LanguageISO6391Enum.Russian,
      forms,
    );
    expect(result).toBe('2 яблока');
  });

  it('should return correct plural form for Russian (count = 5)', () => {
    const forms: ILangWordForms = {
      [LanguageISO6391Enum.Russian]: ['яблоко', 'яблока', 'яблок'],
    };
    const result = service.getPluralFormLocal(
      5,
      LanguageISO6391Enum.Russian,
      forms,
    );
    expect(result).toBe('5 яблок');
  });

  it('should return correct plural form without count when needReturnCount is false', () => {
    const forms: ILangWordForms = {
      [LanguageISO6391Enum.Russian]: ['яблоко', 'яблока', 'яблок'],
    };
    const result = service.getPluralFormLocal(
      3,
      LanguageISO6391Enum.Russian,
      forms,
      false,
    );
    expect(result).toBe('яблока');
  });
});
