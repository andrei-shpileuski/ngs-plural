import { Optional, Pipe, PipeTransform } from '@angular/core';
import { PluralizationService } from '../services/injectable/pluralization.service';
import { TranslateService } from '@ngx-translate/core';
import { LanguageISO6391Type } from '../models/types/language-iso-639-1.type';

@Pipe({
  name: 'translatePlural',
  standalone: true,
  pure: false,
})
export class TranslatePluralPipe implements PipeTransform {
  constructor(
    private pluralizationService: PluralizationService,
    @Optional() private translateService: TranslateService,
  ) {
    if (!this.translateService)
      console.error(
        'Error in TranslatePluralPipe: TranslateService is not provided, some features may not work as expected.',
      );
  }

  transform(
    count: number,
    instant: string,
    needReturnCount: boolean = true,
  ): string {
    if (!this.translateService) return count.toString();

    const actualLang = (this.translateService.currentLang ||
      this.translateService.getDefaultLang()) as LanguageISO6391Type;

    const translationsForLang =
      this.translateService.store.translations[actualLang];

    if (!translationsForLang) return instant;

    const forms: string[] = this.getNestedValue(translationsForLang, instant);

    if (!forms) return instant;

    return this.pluralizationService.getPluralFormLocal(
      count,
      {
        lang: actualLang,
        forms: forms,
      },
      needReturnCount,
    );
  }

  private getNestedValue(obj: any, path: string): any {
    return path.split('.').reduce((acc, key) => {
      return acc?.[key];
    }, obj);
  }
}
