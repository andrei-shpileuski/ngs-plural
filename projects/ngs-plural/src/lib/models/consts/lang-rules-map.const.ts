import { LanguageISO6391Type } from '../types/language-iso-639-1.type';
import { ILangRulesService } from '../interfaces/lang-rules-service.interface';
import { LanguageISO6391Enum } from '../enums/language-iso-639-1.enum';
import {
  LangCaRuleService,
  LangDaRuleService,
  LangDeRuleService,
  LangEnRuleService,
  LangEsRuleService,
  LangFiRuleService,
  LangFrRuleService,
  LangHuRuleService,
  LangItRuleService,
  LangNlRuleService,
  LangNoRuleService,
  LangPtRuleService,
  LangRoRuleService,
  LangRuRuleService,
  LangSvRuleService,
  LangTrRuleService,
} from '../../services/langs/langs-rules.service';

export const LANG_RULES_MAP: Record<LanguageISO6391Type, ILangRulesService> = {
  [LanguageISO6391Enum.Russian]: new LangRuRuleService(),
  [LanguageISO6391Enum.English]: new LangEnRuleService(),
  [LanguageISO6391Enum.Spanish]: new LangEsRuleService(),
  [LanguageISO6391Enum.French]: new LangFrRuleService(),
  [LanguageISO6391Enum.German]: new LangDeRuleService(),
  [LanguageISO6391Enum.Italian]: new LangItRuleService(),
  [LanguageISO6391Enum.Portuguese]: new LangPtRuleService(),
  [LanguageISO6391Enum.Dutch]: new LangNlRuleService(),
  [LanguageISO6391Enum.Swedish]: new LangSvRuleService(),
  [LanguageISO6391Enum.Norwegian]: new LangNoRuleService(),
  [LanguageISO6391Enum.Danish]: new LangDaRuleService(),
  [LanguageISO6391Enum.Romanian]: new LangRoRuleService(),
  [LanguageISO6391Enum.Catalan]: new LangCaRuleService(),
  [LanguageISO6391Enum.Hungarian]: new LangHuRuleService(),
  [LanguageISO6391Enum.Finnish]: new LangFiRuleService(),
  [LanguageISO6391Enum.Turkish]: new LangTrRuleService(),
};
