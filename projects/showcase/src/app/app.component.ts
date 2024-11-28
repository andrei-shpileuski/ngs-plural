import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PluralizationService } from '../../../ngs-plural/src/lib/services/injectable/pluralization.service';
import { PluralizationLocalPipe } from '../../../ngs-plural/src/lib/pipes/pluralization-local.pipe';
import { ILangWordForms } from '../../../ngs-plural/src/lib/models/interfaces/lang-word-forms.interface';
import { LanguageISO6391Type } from '../../../ngs-plural/src/lib/models/types/language-iso-639-1';

export const PLURAL_POINTS: ILangWordForms = {
  ru: ['балл', 'балла', 'баллов'],
  en: ['point', 'points'],
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PluralizationLocalPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  ngsPluralService = inject(PluralizationService);

  currentLanguage = signal<LanguageISO6391Type>('ru');

  aCount = signal(2);
  bCount = signal(15);

  b = this.ngsPluralService.getPluralFormLocal(22, 'ru', PLURAL_POINTS);
  protected readonly PLURAL_POINTS = PLURAL_POINTS;

  switchLang() {
    this.currentLanguage.update((lang) => (lang === 'ru' ? 'en' : 'ru'));
  }

  upCount() {
    this.aCount.update((count) => ++count);
    this.bCount.update((count) => ++count);
  }
}
