import { ILangRulesService } from '../../../models/interfaces/lang-rules-service.interface';

export class LangRulesEsService implements ILangRulesService {
  applyRules(count: number, forms: string[]): string {
    return count === 1 ? forms[0] : forms[1];
  }
}
