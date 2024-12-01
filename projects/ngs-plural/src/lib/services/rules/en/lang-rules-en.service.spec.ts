import { LangRulesEnService } from './lang-rules-en.service';
import { APPLES } from '../../../models/consts/test-data';
import { LanguageISO6391Enum } from '../../../models/enums/language-iso-639-1.enum';

describe('LangRulesEnService', () => {
  let service: LangRulesEnService;
  const appleFormsEn: string[] = APPLES[LanguageISO6391Enum.English];

  beforeEach(() => {
    service = new LangRulesEnService();
  });

  it('should return plural form for 0', () => {
    const result0 = service.applyRules(0, appleFormsEn);
    expect(result0).toBe(appleFormsEn[1]);
  });

  it('should return singular form for 1', () => {
    const result1 = service.applyRules(1, appleFormsEn);
    expect(result1).toBe(appleFormsEn[0]);
  });

  it('should return plural form for numbers greater than 1', () => {
    const result2 = service.applyRules(2, appleFormsEn);
    const result5 = service.applyRules(5, appleFormsEn);
    const result10 = service.applyRules(10, appleFormsEn);
    const result100 = service.applyRules(100, appleFormsEn);

    expect(result2).toBe(appleFormsEn[1]);
    expect(result5).toBe(appleFormsEn[1]);
    expect(result10).toBe(appleFormsEn[1]);
    expect(result100).toBe(appleFormsEn[1]);
  });
});
