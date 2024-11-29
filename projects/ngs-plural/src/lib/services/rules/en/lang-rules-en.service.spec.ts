import { LangRulesEnService } from './lang-rules-en.service';
import { APPLES } from '../../../models/consts/test-data';
import { LanguageISO6391Enum } from '../../../models/enums/language-iso-639-1.enum';

describe('LangRulesEnService', () => {
  let service: LangRulesEnService;
  const appleFormsEn: string[] = APPLES[LanguageISO6391Enum.English];

  beforeEach(() => {
    service = new LangRulesEnService();
  });

  it('should return the plural form when count is 0', () => {
    const result0 = service.applyRules(0, appleFormsEn);
    expect(result0).toBe(appleFormsEn[1]);
  });

  it('should return the singular form when count is 1', () => {
    const result1 = service.applyRules(1, appleFormsEn);
    expect(result1).toBe(appleFormsEn[0]);
  });

  it('should return the plural form when count is 2', () => {
    const result2 = service.applyRules(2, appleFormsEn);
    expect(result2).toBe(appleFormsEn[1]);
  });
});
