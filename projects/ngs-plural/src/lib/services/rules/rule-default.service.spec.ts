import { RuleDefaultService } from './rule-default.service';
import { APPLES } from '../../models/consts/test-data';
import { LanguageISO6391Enum } from '../../models/enums/language-iso-639-1.enum';

describe('RuleDefaultService', () => {
  let service: RuleDefaultService;
  const appleFormsEn = APPLES[LanguageISO6391Enum.English]!;

  beforeEach(() => {
    service = new RuleDefaultService();
  });

  it('should return plural form for 0', () => {
    const result0 = service.applyRule(0, appleFormsEn);
    expect(result0).toBe(appleFormsEn[1]);
  });

  it('should return singular form for 1', () => {
    const result1 = service.applyRule(1, appleFormsEn);
    expect(result1).toBe(appleFormsEn[0]);
  });

  it('should return plural form for numbers greater than 1', () => {
    const result2 = service.applyRule(2, appleFormsEn);
    const result5 = service.applyRule(5, appleFormsEn);
    const result10 = service.applyRule(10, appleFormsEn);
    const result100 = service.applyRule(100, appleFormsEn);

    expect(result2).toBe(appleFormsEn[1]);
    expect(result5).toBe(appleFormsEn[1]);
    expect(result10).toBe(appleFormsEn[1]);
    expect(result100).toBe(appleFormsEn[1]);
  });
});
