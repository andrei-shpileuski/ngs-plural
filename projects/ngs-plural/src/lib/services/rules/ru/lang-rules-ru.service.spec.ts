import { LangRulesRuService } from './lang-rules-ru.service';

describe('LangRulesRuService', () => {
  let service: LangRulesRuService;

  beforeEach(() => {
    service = new LangRulesRuService();
  });

  it('should return correct singular form for 1', () => {
    const result = service.applyRules(1, ['яблоко', 'яблоки', 'яблок']);
    expect(result).toBe('яблоко');
  });

  it('should return correct plural form for 2, 3, 4', () => {
    const result2 = service.applyRules(2, ['яблоко', 'яблока', 'яблок']);
    const result3 = service.applyRules(3, ['яблоко', 'яблока', 'яблок']);
    const result4 = service.applyRules(4, ['яблоко', 'яблока', 'яблок']);

    expect(result2).toBe('яблока');
    expect(result3).toBe('яблока');
    expect(result4).toBe('яблока');
  });

  it('should return correct plural form for 5, 10, 20, 21, 22, 25', () => {
    const result5 = service.applyRules(5, ['яблоко', 'яблока', 'яблок']);
    const result6 = service.applyRules(10, ['яблоко', 'яблока', 'яблок']);
    const result7 = service.applyRules(20, ['яблоко', 'яблока', 'яблок']);
    const result8 = service.applyRules(21, ['яблоко', 'яблока', 'яблок']);
    const result9 = service.applyRules(22, ['яблоко', 'яблока', 'яблок']);
    const result10 = service.applyRules(25, ['яблоко', 'яблока', 'яблок']);

    expect(result5).toBe('яблок');
    expect(result6).toBe('яблок');
    expect(result7).toBe('яблок');
    expect(result8).toBe('яблоко');
    expect(result9).toBe('яблока');
    expect(result10).toBe('яблок');
  });

  it('should return correct plural form for numbers ending in 11-14', () => {
    const result11 = service.applyRules(11, ['яблоко', 'яблока', 'яблок']);
    const result12 = service.applyRules(12, ['яблоко', 'яблока', 'яблок']);
    const result13 = service.applyRules(13, ['яблоко', 'яблока', 'яблок']);
    const result14 = service.applyRules(14, ['яблоко', 'яблока', 'яблок']);

    expect(result11).toBe('яблок');
    expect(result12).toBe('яблок');
    expect(result13).toBe('яблок');
    expect(result14).toBe('яблок');
  });
});
