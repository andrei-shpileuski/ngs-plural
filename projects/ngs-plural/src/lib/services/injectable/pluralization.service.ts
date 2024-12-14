import { Injectable } from '@angular/core';
import { LanguageISO6391Enum } from '../../models/enums/language-iso-639-1.enum';
import { LANG_RULES_MAP } from '../../models/consts/lang-rules-map.const';
import { IPluralOptions } from '../../models/interfaces/options.interface';

@Injectable({
  providedIn: 'root',
})
export class PluralizationService {
  public getPluralFormLocal(
    count: number,
    pluralOptions: IPluralOptions,
    needReturnCount: boolean = true,
  ): string {
    if (!pluralOptions.forms) return '';
    if (!pluralOptions.lang) pluralOptions.lang = LanguageISO6391Enum.English;

    const ruleService =
      LANG_RULES_MAP[pluralOptions.lang] ||
      LANG_RULES_MAP[LanguageISO6391Enum.English];

    let form: string;

    if (Array.isArray(pluralOptions.forms)) {
      if (!pluralOptions.forms.length) return '';

      form = ruleService.applyRule(
        Math.abs(count),
        Array.isArray(pluralOptions.forms)
          ? pluralOptions.forms
          : pluralOptions.forms[pluralOptions.lang],
      );
    } else {
      if (!pluralOptions.forms[pluralOptions.lang]) return '';

      form = ruleService.applyRule(
        Math.abs(count),
        pluralOptions.forms[pluralOptions.lang]!,
      );
    }

    return needReturnCount ? `${count} ${form}` : `${form}`;
  }
}
