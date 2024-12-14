import { Component, computed, input } from '@angular/core';
import { ILangWordForms } from '../../../../../ngs-plural/src/lib/models/interfaces/lang-word-forms.interface';
import { LanguageISO6391Type } from '../../../../../ngs-plural/src/lib/models/types/language-iso-639-1.type';
import { PluralPipe } from '../../../../../ngs-plural/src/lib/pipes/plural.pipe';
import { TranslatePluralPipe } from '../../../../../ngs-plural/src/lib/pipes/translate-plural.pipe';
import { TranslatePipe } from '@ngx-translate/core';
import { JsonPipe } from '@angular/common';
import { tsCode } from '../../models/consts/ts-code.const';

@Component({
  selector: 'app-use-cases',
  standalone: true,
  imports: [PluralPipe, TranslatePluralPipe, TranslatePipe, JsonPipe],
  templateUrl: './use-cases.component.html',
  styleUrl: './use-cases.component.scss',
})
export class UseCasesComponent {
  count = input.required<number>();
  lang = input.required<LanguageISO6391Type>();
  instant = input.required<string>();
  langWordForms = input.required<ILangWordForms>();
  wordForms = computed(() => this.langWordForms()[this.lang()!]);
  protected readonly tsCode = tsCode;
}
