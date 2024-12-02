import { PossibleWordForms } from '../types/word-forms';

export interface ILangRulesService {
  applyRule(count: number, forms: PossibleWordForms): string;
}
