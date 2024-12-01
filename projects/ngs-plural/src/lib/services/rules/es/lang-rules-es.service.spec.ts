import { LangRulesEsService } from './lang-rules-es.service';
import { APPLES } from '../../../models/consts/test-data';
import { LanguageISO6391Enum } from '../../../models/enums/language-iso-639-1.enum';

describe('LangRulesEsService', () => {
  let service: LangRulesEsService;
  const appleFormsEs: string[] = APPLES[LanguageISO6391Enum.Spanish];

  beforeEach(() => {
    service = new LangRulesEsService();
  });

  it('should return plural form for 0', () => {
    const result0 = service.applyRules(0, appleFormsEs);
    expect(result0).toBe(appleFormsEs[1]);
  });

  it('should return singular form for 1', () => {
    const result1 = service.applyRules(1, appleFormsEs);
    expect(result1).toBe(appleFormsEs[0]);
  });

  it('should return plural form for numbers greater than 1', () => {
    const result2 = service.applyRules(2, appleFormsEs);
    const result5 = service.applyRules(5, appleFormsEs);
    const result10 = service.applyRules(10, appleFormsEs);
    const result100 = service.applyRules(100, appleFormsEs);

    expect(result2).toBe(appleFormsEs[1]);
    expect(result5).toBe(appleFormsEs[1]);
    expect(result10).toBe(appleFormsEs[1]);
    expect(result100).toBe(appleFormsEs[1]);
  });
});
