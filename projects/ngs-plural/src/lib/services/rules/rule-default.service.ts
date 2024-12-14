import { ILangRulesService } from '../../models/interfaces/lang-rules-service.interface';

export class RuleDefaultService implements ILangRulesService {
  applyRule(count: number, forms: string[]): string {
    return count === 1 ? forms[0] : forms[1];
  }
}
