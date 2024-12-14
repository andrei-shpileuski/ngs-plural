export const tsCode = `
const APPLES {
    'en': ['apple', 'apples'],
    'ru': ['яблоко', 'яблока', 'яблок'],
    ...
}

export class SomeComponent {
  pluralizationService = inject(PluralizationService);

  //// Static
  resultStatic = this.pluralizationService.getPluralFormLocal(
      1,
      'en',
      APPLES,
      true
    );

  //// Observable
  resultObservable$: Observable<string> = combineLatest([
    this.language$,
    this.count$,
  ]).pipe(
    map(([lang, count]) => {
      return this.pluralizationService.getPluralFormLocal(
        count,
        lang,
        APPLES,
        true
      );
    }),
  );

  //// Signal
  resultSignal: Signal<string> = computed(() => {
    return this.pluralizationService.getPluralFormLocal(
      this.count(),
      this.language(),
      APPLES,
      true
    );
  });
}
`.trim();
