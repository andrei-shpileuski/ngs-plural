import { LangRulesEnService } from './lang-rules-en.service';

describe('LangRulesEnService', () => {
  let service: LangRulesEnService;

  beforeEach(() => {
    service = new LangRulesEnService();
  });

  it('should return the plural form when count is 0', () => {
    const result = service.applyRules(0, ['apple', 'apples']);
    expect(result).toBe('apples');
  });

  it('should return the singular form when count is 1', () => {
    const result = service.applyRules(1, ['apple', 'apples']);
    expect(result).toBe('apple');
  });

  it('should return the plural form when count is 2', () => {
    const result = service.applyRules(2, ['apple', 'apples']);
    expect(result).toBe('apples');
  });
});
