# ngs-plural

`ngs-plural` is a lightweight Angular library for handling pluralization in different languages using a pipe and a service. It simplifies the process of generating grammatically correct plural forms based on a numeric count and supports custom language rules.

- **Pipe**: [PluralizationLocalPipe](#pluralizationlocalpipe-example) for seamless pluralization in templates.
- **Service**: [PluralizationService](#pluralizationservice-example) provides reusable methods for programmatic pluralization.

[Showcase demo page - HERE](https://ngs-plural.onrender.com)

### Supported Languages
- English
- Russian
- Spanish
- French 
- Italian
- German
- Portuguese
- Dutch
- Swedish
- Norwegian
- Danish
- Romanian
- Catalan
- Hungarian
- Finnish
- Turkish
- [Add a language](#contributing)
- [Request a new language via email](mailto:andrei.shpileuski.work@gmail.com)

### Navigation

- [Supported Languages](#supported-languages)
- [Installation & Usage](#installation--usage)
  - [Pipe](#pluralizationlocalpipe-example)
  - [Service](#pluralizationservice-example)
- [Contributing](#contributing)

---

## Installation & Usage

Install `ngs-plural` via npm:

```bash
npm install ngs-plural
```

### PluralizationLocalPipe usage example:

```typescript
import { Component } from "@angular/core";
import { ILangWordForms } from "ngs-plural";
import { PluralizationLocalPipe } from "ngs-plural";

@Component({
  selector: "app-root",
  template: ` <p>{{ count | pluralizationLocal: "en" : appleForms }}</p> `,
  standalone: true,
  imports: [PluralizationLocalPipe],
})
export class AppComponent {
  count = 5;
  appleForms: ILangWordForms = {
    en: ["apple", "apples"],
    ru: ["яблоко", "яблока", "яблок"],
    es: ['manzana', 'manzanas'],
    fr: ['pomme', 'pommes'],
  };
}
```

### PluralizationService usage example:

```typescript
import { Component } from "@angular/core";
import { PluralizationService, ILangWordForms } from "ngs-plural";

@Component({
  selector: "app-root",
  template: `<p>{{ result }}</p>`,
})
export class AppComponent {
  result: string;

  constructor(private pluralizationService: PluralizationService) {
    const count = 3;
    appleForms: ILangWordForms = {
      en: ["apple", "apples"],
      ru: ["яблоко", "яблока", "яблок"],
      es: ['manzana', 'manzanas'],
      fr: ['pomme', 'pommes'],
    };
    this.result = this.pluralizationService.getPluralFormLocal(count, "ru", appleForms);
  }
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
git clone https://github.com/andrei-shpileuski/ngx-plural.git
```

```bash
cd ngx-plural
```

```bash
npm install
```

3. Create a new branch for your changes
4. Submit a pull request with a detailed description of the changes
