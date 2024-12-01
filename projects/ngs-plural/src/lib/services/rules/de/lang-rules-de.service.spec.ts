import { LangRulesDeService } from './lang-rules-de.service';
import { APPLES } from '../../../models/consts/test-data';
import { LanguageISO6391Enum } from '../../../models/enums/language-iso-639-1.enum';

describe('LangRulesDeService', () => {
  let service: LangRulesDeService;
  const appleFormsDe: string[] = APPLES[LanguageISO6391Enum.German];

  beforeEach(() => {
    service = new LangRulesDeService();
  });

  it('should return plural form for 0', () => {
    const result0 = service.applyRules(0, appleFormsDe);
    expect(result0).toBe(appleFormsDe[1]);
  });

  it('should return singular form for 1', () => {
    const result1 = service.applyRules(1, appleFormsDe);
    expect(result1).toBe(appleFormsDe[0]);
  });

  it('should return plural form for numbers greater than 1', () => {
    const result2 = service.applyRules(2, appleFormsDe);
    const result5 = service.applyRules(5, appleFormsDe);
    const result10 = service.applyRules(10, appleFormsDe);
    const result100 = service.applyRules(100, appleFormsDe);

    expect(result2).toBe(appleFormsDe[1]);
    expect(result5).toBe(appleFormsDe[1]);
    expect(result10).toBe(appleFormsDe[1]);
    expect(result100).toBe(appleFormsDe[1]);
  });
});
