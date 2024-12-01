import { LangRulesRuService } from '../../services/rules/ru/lang-rules-ru.service';
import { LangRulesEnService } from '../../services/rules/en/lang-rules-en.service';
import { ILangRulesService } from '../interfaces/lang-rules-service.interface';
import { LanguageISO6391Type } from '../types/language-iso-639-1.type';
import { LanguageISO6391Enum } from '../enums/language-iso-639-1.enum';
import { LangRulesEsService } from '../../services/rules/es/lang-rules-es.service';

export const LANG_RULES_MAP: Record<LanguageISO6391Type, ILangRulesService> = {
  [LanguageISO6391Enum.Russian]: new LangRulesRuService(),
  [LanguageISO6391Enum.English]: new LangRulesEnService(),
  [LanguageISO6391Enum.Spanish]: new LangRulesEsService(),
};
