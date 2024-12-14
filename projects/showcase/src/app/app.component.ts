import { Component, computed, inject, OnInit, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { UseCasesComponent } from './components/use-cases/use-cases.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TranslatePipe,
    ReactiveFormsModule,
    AsyncPipe,
    UseCasesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  pluralizationService = inject(PluralizationService);
  translateService = inject(TranslateService);

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
    this.defineDefaultLanguage();
    this.updateResultStatic();
    this.trackLanguage();
  }

  private defineDefaultLanguage(): void {
    const defaultLanguage = this.translateService.getDefaultLang();
    this.languageControl.patchValue(defaultLanguage as LanguageISO6391Enum);
  }

  private trackLanguage(): void {
    this.languageControl.valueChanges
      .pipe()
      .subscribe((lang) => this.translateService.use(lang as string));
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
      return this.pluralizationService.getPluralFormLocal(count!, {
        lang: lang!,
        forms: APPLES,
      });
    }),
  );

  //// Signal
  resultSignal: Signal<string> = computed(() => {
    return this.pluralizationService.getPluralFormLocal(this.count()!, {
      lang: this.language()!,
      forms: APPLES,
    });
  });

  //--------------------------------------------------------

  updateResultStatic(): void {
    this.resultStatic = this.pluralizationService.getPluralFormLocal(
      this.countControl.value!,
      { lang: this.languageControl.value!, forms: APPLES },
    );
  }
}
