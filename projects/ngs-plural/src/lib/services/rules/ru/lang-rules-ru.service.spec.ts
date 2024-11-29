import { LangRulesRuService } from './lang-rules-ru.service';
import { APPLES } from '../../../models/consts/test-data';
import { LanguageISO6391Enum } from '../../../models/enums/language-iso-639-1.enum';

describe('LangRulesRuService', () => {
  let service: LangRulesRuService;
  const appleFormsRu: string[] = APPLES[LanguageISO6391Enum.Russian];

  beforeEach(() => {
    service = new LangRulesRuService();
  });

  it('should return correct singular form for 0', () => {
    const result0 = service.applyRules(0, appleFormsRu);
    expect(result0).toBe(appleFormsRu[2]);
  });

  it('should return correct singular form for 1', () => {
    const result1 = service.applyRules(1, appleFormsRu);
    expect(result1).toBe(appleFormsRu[0]);
  });

  it('should return correct plural form for 2-4', () => {
    const result2 = service.applyRules(2, appleFormsRu);
    const result3 = service.applyRules(3, appleFormsRu);
    const result4 = service.applyRules(4, appleFormsRu);

    expect(result2).toBe(appleFormsRu[1]);
    expect(result3).toBe(appleFormsRu[1]);
    expect(result4).toBe(appleFormsRu[1]);
  });

  it('should return correct plural form for 5-20', () => {
    const result5 = service.applyRules(5, appleFormsRu);
    const result6 = service.applyRules(6, appleFormsRu);
    const result7 = service.applyRules(7, appleFormsRu);
    const result8 = service.applyRules(8, appleFormsRu);
    const result9 = service.applyRules(9, appleFormsRu);
    const result10 = service.applyRules(10, appleFormsRu);
    const result11 = service.applyRules(11, appleFormsRu);
    const result12 = service.applyRules(12, appleFormsRu);
    const result13 = service.applyRules(13, appleFormsRu);
    const result14 = service.applyRules(14, appleFormsRu);
    const result15 = service.applyRules(15, appleFormsRu);
    const result16 = service.applyRules(16, appleFormsRu);
    const result17 = service.applyRules(17, appleFormsRu);
    const result18 = service.applyRules(18, appleFormsRu);
    const result19 = service.applyRules(19, appleFormsRu);
    const result20 = service.applyRules(20, appleFormsRu);

    expect(result5).toBe(appleFormsRu[2]);
    expect(result6).toBe(appleFormsRu[2]);
    expect(result7).toBe(appleFormsRu[2]);
    expect(result8).toBe(appleFormsRu[2]);
    expect(result9).toBe(appleFormsRu[2]);
    expect(result10).toBe(appleFormsRu[2]);
    expect(result11).toBe(appleFormsRu[2]);
    expect(result12).toBe(appleFormsRu[2]);
    expect(result13).toBe(appleFormsRu[2]);
    expect(result14).toBe(appleFormsRu[2]);
    expect(result15).toBe(appleFormsRu[2]);
    expect(result16).toBe(appleFormsRu[2]);
    expect(result17).toBe(appleFormsRu[2]);
    expect(result18).toBe(appleFormsRu[2]);
    expect(result19).toBe(appleFormsRu[2]);
    expect(result20).toBe(appleFormsRu[2]);
  });

  it('should return correct plural form for 100', () => {
    const result100 = service.applyRules(11, appleFormsRu);

    expect(result100).toBe(appleFormsRu[2]);
  });
});
