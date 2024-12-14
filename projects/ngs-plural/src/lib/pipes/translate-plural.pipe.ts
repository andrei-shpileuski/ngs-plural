import { Pipe, PipeTransform } from '@angular/core';
import { PluralizationService } from '../services/injectable/pluralization.service';
import { TranslateService } from '@ngx-translate/core';
import { ITranslatePluralOptions } from '../models/interfaces/options.interface';
import { LanguageISO6391Type } from '../models/types/language-iso-639-1.type';

@Pipe({
  name: 'translatePlural',
  standalone: true,
  pure: false,
})
export class TranslatePluralPipe implements PipeTransform {
  constructor(
    private pluralizationService: PluralizationService,
    private translateService: TranslateService,
  ) {}

  transform(
    count: number,
    translatePluralOptions: ITranslatePluralOptions,
    needReturnCount: boolean = true,
  ): string {
    const forms = this.translateService.instant(translatePluralOptions.instant);
    const currentLang = this.translateService
      .currentLang as LanguageISO6391Type;
    const defaultLang =
      this.translateService.getDefaultLang() as LanguageISO6391Type;

    return this.pluralizationService.getPluralFormLocal(
      count,
      {
        lang: translatePluralOptions.lang || currentLang || defaultLang,
        forms: forms,
      },
      needReturnCount,
    );
  }
}
