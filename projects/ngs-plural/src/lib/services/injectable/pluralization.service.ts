import { Injectable } from '@angular/core';
import { ILangWordForms } from '../../models/interfaces/lang-word-forms.interface';
import { LanguageISO6391Type } from '../../models/types/language-iso-639-1';
import { LanguageISO6391Enum } from '../../models/enums/language-iso-639-1.enum';
import { LANG_RULES_MAP } from '../../models/consts/lang-rules-map.const';

@Injectable({
  providedIn: 'root',
})
export class PluralizationService {
  public getPluralFormLocal(
    count: number,
    lang: LanguageISO6391Type,
    forms: ILangWordForms,
    needReturnCount: boolean = true,
  ): string {
    const ruleService =
      LANG_RULES_MAP[lang] || LANG_RULES_MAP[LanguageISO6391Enum.English];
    const form = ruleService.applyRules(count, forms[lang]);

    return needReturnCount ? `${count} ${form}` : `${form}`;
  }
}
