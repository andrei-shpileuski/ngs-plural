export const tsCode = `
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
    updateResultStatic(): void {
    this.resultStatic = this.pluralizationService.getPluralFormLocal(
      this.countControl.value!,
      this.languageControl.value!,
      APPLES,
    );
  }

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
}
`.trim();
