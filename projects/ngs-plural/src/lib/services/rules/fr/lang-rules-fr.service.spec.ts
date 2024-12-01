import { LangRulesFrService } from './lang-rules-fr.service';
import { APPLES } from '../../../models/consts/test-data';
import { LanguageISO6391Enum } from '../../../models/enums/language-iso-639-1.enum';

describe('LangRulesFrService', () => {
  let service: LangRulesFrService;
  const appleFormsFr: string[] = APPLES[LanguageISO6391Enum.French];

  beforeEach(() => {
    service = new LangRulesFrService();
  });

  it('should return plural form for 0', () => {
    const result0 = service.applyRules(0, appleFormsFr);
    expect(result0).toBe(appleFormsFr[1]);
  });

  it('should return singular form for 1', () => {
    const result1 = service.applyRules(1, appleFormsFr);
    expect(result1).toBe(appleFormsFr[0]);
  });

  it('should return plural form for numbers greater than 1', () => {
    const result2 = service.applyRules(2, appleFormsFr);
    const result5 = service.applyRules(5, appleFormsFr);
    const result10 = service.applyRules(10, appleFormsFr);
    const result100 = service.applyRules(100, appleFormsFr);

    expect(result2).toBe(appleFormsFr[1]);
    expect(result5).toBe(appleFormsFr[1]);
    expect(result10).toBe(appleFormsFr[1]);
    expect(result100).toBe(appleFormsFr[1]);
  });
});
