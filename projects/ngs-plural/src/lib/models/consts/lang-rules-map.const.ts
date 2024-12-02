import { LanguageISO6391Type } from '../types/language-iso-639-1.type';
import { ILangRulesService } from '../interfaces/lang-rules-service.interface';
import { LanguageISO6391Enum } from '../enums/language-iso-639-1.enum';
import {
  LangDeRuleService,
  LangEnRuleService,
  LangEsRuleService,
  LangFrRuleService,
  LangItRuleService,
  LangRuRuleService,
} from '../../services/langs/langs-rules.service';

export const LANG_RULES_MAP: Record<LanguageISO6391Type, ILangRulesService> = {
  [LanguageISO6391Enum.Russian]: new LangRuRuleService(),
  [LanguageISO6391Enum.English]: new LangEnRuleService(),
  [LanguageISO6391Enum.Spanish]: new LangEsRuleService(),
  [LanguageISO6391Enum.French]: new LangFrRuleService(),
  [LanguageISO6391Enum.German]: new LangDeRuleService(),
  [LanguageISO6391Enum.Italian]: new LangItRuleService(),
};
