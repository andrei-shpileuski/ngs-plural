import { Pipe, PipeTransform } from '@angular/core';
import { PluralizationService } from '../services/injectable/pluralization.service';
import { LanguageISO6391Type } from '../models/types/language-iso-639-1.type';
import { ILangWordForms } from '../models/interfaces/lang-word-forms.interface';

@Pipe({
  name: 'pluralizationLocal',
  standalone: true,
})
export class PluralizationLocalPipe implements PipeTransform {
  constructor(private pluralizationService: PluralizationService) {}

  transform(
    count: number,
    language: LanguageISO6391Type,
    forms: ILangWordForms,
    needReturnCount: boolean = true,
  ): string {
    return this.pluralizationService.getPluralFormLocal(
      count,
      language,
      forms,
      needReturnCount,
    );
  }
}
