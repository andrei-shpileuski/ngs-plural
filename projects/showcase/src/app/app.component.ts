import { Component, computed, inject, OnInit, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PluralizationLocalPipe } from '../../../ngs-plural/src/lib/pipes/pluralization-local.pipe';
import { APPLES } from '../../../ngs-plural/src/lib/models/consts/test-data';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ILangWordForms } from '../../../ngs-plural/src/lib/models/interfaces/lang-word-forms.interface';
import { AVAILABLE_LANGUAGES } from '../../../ngs-plural/src/lib/models/consts/available-languages.const';
import { LanguageISO6391Enum } from '../../../ngs-plural/src/lib/models/enums/language-iso-639-1.enum';
import { LanguageISO6391Type } from '../../../ngs-plural/src/lib/models/types/language-iso-639-1.type';
import { combineLatest, map, Observable, startWith } from 'rxjs';
import { PluralizationService } from '../../../ngs-plural/src/lib/services/injectable/pluralization.service';
import { AsyncPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { tsCode } from './models/consts/ts-code.const';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PluralizationLocalPipe,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  pluralizationService = inject(PluralizationService);

  languageControl = new FormControl<LanguageISO6391Type>('en');
  countControl = new FormControl<number>(0);

  language$ = this.languageControl.valueChanges.pipe(
    startWith(this.languageControl.value),
  );
  count$ = this.countControl.valueChanges.pipe(
    startWith(this.countControl.value),
  );

  language = toSignal(this.language$);
  count = toSignal(this.count$);

  availableLanguages: LanguageISO6391Enum[] = AVAILABLE_LANGUAGES;
  appleForms: ILangWordForms = APPLES;
  tsCode: string = tsCode;

  ngOnInit(): void {
    this.updateResultStatic();
  }

  //--------------------------------------------------------

  // Cases
  //// Static
  resultStatic: string = '';

  //// Observable
  resultObservable$: Observable<string> = combineLatest([
    this.language$,
    this.count$,
  ]).pipe(
    map(([lang, count]) => {
      return this.pluralizationService.getPluralFormLocal(
        count!,
        lang!,
        APPLES,
      );
    }),
  );

  //// Signal
  resultSignal: Signal<string> = computed(() => {
    return this.pluralizationService.getPluralFormLocal(
      this.count()!,
      this.language()!,
      APPLES,
    );
  });

  //--------------------------------------------------------

  updateResultStatic(): void {
    this.resultStatic = this.pluralizationService.getPluralFormLocal(
      this.countControl.value!,
      this.languageControl.value!,
      APPLES,
    );
  }
}
