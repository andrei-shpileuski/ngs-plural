import { Pipe, PipeTransform } from '@angular/core';
import { PluralizationService } from '../services/injectable/pluralization.service';
import { IPluralOptions } from '../models/interfaces/options.interface';

@Pipe({
  name: 'plural',
  standalone: true,
  pure: false,
})
export class PluralPipe implements PipeTransform {
  constructor(private pluralizationService: PluralizationService) {}

  transform(
    count: number,
    pluralOptions: IPluralOptions,
    needReturnCount: boolean = true,
  ): string {
    return this.pluralizationService.getPluralFormLocal(
      count,
      pluralOptions,
      needReturnCount,
    );
  }
}
