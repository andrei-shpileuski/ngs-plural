import { LangRulesItService } from './lang-rules-it.service';
import { APPLES } from '../../../models/consts/test-data';
import { LanguageISO6391Enum } from '../../../models/enums/language-iso-639-1.enum';

describe('LangRulesItService', () => {
  let service: LangRulesItService;
  const appleFormsIt: string[] = APPLES[LanguageISO6391Enum.Italian];

  beforeEach(() => {
    service = new LangRulesItService();
  });

  it('should return plural form for 0', () => {
    const result0 = service.applyRules(0, appleFormsIt);
    expect(result0).toBe(appleFormsIt[1]);
  });

  it('should return singular form for 1', () => {
    const result1 = service.applyRules(1, appleFormsIt);
    expect(result1).toBe(appleFormsIt[0]);
  });

  it('should return plural form for numbers greater than 1', () => {
    const result2 = service.applyRules(2, appleFormsIt);
    const result5 = service.applyRules(5, appleFormsIt);
    const result10 = service.applyRules(10, appleFormsIt);
    const result100 = service.applyRules(100, appleFormsIt);

    expect(result2).toBe(appleFormsIt[1]);
    expect(result5).toBe(appleFormsIt[1]);
    expect(result10).toBe(appleFormsIt[1]);
    expect(result100).toBe(appleFormsIt[1]);
  });
});
