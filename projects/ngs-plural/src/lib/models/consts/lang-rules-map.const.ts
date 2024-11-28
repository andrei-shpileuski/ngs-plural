import { LangRulesRuService } from '../../services/rules/ru/lang-rules-ru.service';
import { LangRulesEnService } from '../../services/rules/en/lang-rules-en.service';
import { ILangRulesService } from '../interfaces/lang-rules-service.interface';
import { LanguageISO6391Type } from '../types/language-iso-639-1';
import { LanguageISO6391Enum } from '../enums/language-iso-639-1.enum';

export const LANG_RULES_MAP: Record<LanguageISO6391Type, ILangRulesService> = {
  [LanguageISO6391Enum.Russian]: new LangRulesRuService(),
  [LanguageISO6391Enum.English]: new LangRulesEnService(),
};
