# ngs-plural

`ngs-plural` is a lightweight Angular library for handling pluralization in different languages using a pipe and a service. It simplifies the process of generating grammatically correct plural forms based on a numeric count and supports custom language rules.

### Features

- **[TranslatePluralPipe](#--translatepluralpipe-depends-on-ngx-translate)**: pluralization via JSON translation (depends on @ngx-translate/core).
- **[PluralPipe](#--pluralpipe)**: direct word forms for pluralization.
- **[PluralizationService](#--pluralizationservice)**: flexible pluralization with data flow.

[Showcase demo page - HERE](https://ngs-plural.onrender.com)

### Supported Languages (rules)

English, Russian, Spanish, French, Italian, German, Portuguese, Dutch, Swedish, Norwegian, Danish, Romanian, Catalan, Hungarian, Finnish, Turkish, Ukrainian, Belarusian, Serbian, Croatian, Bulgarian, Czech, Slovak, Slovene, Macedonian.

[+ Add a language](#contributing)  
[+ Request a new language via email](mailto:andrei.shpileuski.work@gmail.com)

### Navigation

- [Supported Languages](#supported-languages-rules)
- [Installation & Usage](#installation--usage)
  - [TranslatePluralPipe](#--translatepluralpipe-depends-on-ngx-translate)
  - [PluralPipe](#--pluralpipe)
  - [PluralizationService](#--pluralizationservice)
- [Contributing](#contributing)

---

## Installation & Usage

Install `ngs-plural` via npm:

```bash
npm install ngs-plural
```

### - TranslatePluralPipe (\*depends on ngx-translate)

JSON ({{lang}}.json):

```json
{ "APPLES": ["apple", "apples"] }
```

HTML:

```
{{ 1 | translatePlural: 'APPLES' }}
// output: 1 apple (used 'currentLanguage' from TranslateService)

{{ 5 | translatePlural: 'APPLES' }}
// output: 5 apples (used 'currentLanguage' from TranslateService)

{{ 0 | translatePlural: 'APPLES' : false }}
// output: apples (used 'currentLanguage' from TranslateService)
```

### - PluralPipe

TypeScript:

```typescript
const appleWordForms = {
  en: ["apple", "apples"],
  ru: ["яблоко", "яблока", "яблок"],
  //...
};
```

HTML:

```
{{ 0 | plural: { lang: 'en', forms: appleWordForms } }}
// output: 0 apples

{{ 0 | plural: { lang: 'en', forms: appleWordForms } : false }}
// output: apples

{{ 0 | plural: { lang: 'en', forms: [ "apple", "apples" ] } }}
// output: 0 apples

{{ 0 | plural: { lang: 'en', forms: [ "apple", "apples" ] } : false }}
// output: apples

{{ 0 | plural: { forms: appleWordForms } }}
// output: 0 apples (used 'en' by default)

{{ 0 | plural: { forms: appleWordForms } : false }}
// output: apples (used 'en' by default)
```

### - PluralizationService

TypeScript:

```typescript
export class SomeComponent {
  pluralizationService = inject(PluralizationService);

  //// Static
  resultStatic = this.pluralizationService.getPluralFormLocal(1, "en", APPLES, true);

  //// Observable
  resultObservable$: Observable<string> = combineLatest([this.language$, this.count$]).pipe(
    map(([lang, count]) => {
      return this.pluralizationService.getPluralFormLocal(count, lang, APPLES, true);
    }),
  );

  //// Signal
  resultSignal: Signal<string> = computed(() => {
    return this.pluralizationService.getPluralFormLocal(this.count(), this.language(), APPLES, true);
  });
}
```

[More cases here](https://ngs-plural.onrender.com)

---

## Contributing

To contribute or use the library in development mode, you can clone the repository and install dependencies.

### Steps to contribute:

1. Fork the repository
2. Clone the repo, install dependencies

```bash
git clone https://github.com/andrei-shpileuski/ngs-plural.git
```

```bash
cd ngs-plural
```

```bash
npm install
```

3. Create a new branch for your changes
4. Submit a pull request with a detailed description of the changes
