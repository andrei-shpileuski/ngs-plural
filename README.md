# ngs-plural

`ngs-plural` is a lightweight Angular library for handling pluralization in different languages using a pipe and a service. It simplifies the process of generating grammatically correct plural forms based on a numeric count and supports custom language rules.

- **Pipe**: [PluralizationLocalPipe](#pluralizationlocalpipe-example) for seamless pluralization in templates.
- **Service**: [PluralizationService](#pluralizationservice-example) provides reusable methods for programmatic pluralization.
- **Multi-language Support**: Currently supports English and Russian.
- **Customizable**: Easily extendable to include more languages and rules.

### Navigation

- [Installation & Usage](#installation--usage)
  - [Pipe](#pluralizationlocalpipe-example)
  - [Service](#pluralizationservice-example)
- [Contributing](#contributing)
- [Keywords](#keywords)

---

## Installation & Usage

Install `ngs-plural` via npm:

```bash
npm install ngs-plural
```

### PluralizationLocalPipe example:

```typescript
import { Component } from "@angular/core";
import { ILangWordForms } from "ngs-plural";
import { PluralizationLocalPipe } from "ngs-plural";

@Component({
  selector: "app-root",
  template: ` <p>{{ count | pluralizationLocal: "en" : wordForms }}</p> `,
  standalone: true,
  imports: [PluralizationLocalPipe],
})
export class AppComponent {
  count = 5;
  wordForms: ILangWordForms = {
    en: ["apple", "apples"],
    ru: ["яблоко", "яблока", "яблок"],
  };
}
```

### PluralizationService example:

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
    const wordForms: ILangWordForms = {
      en: ["apple", "apples"],
      ru: ["яблоко", "яблока", "яблок"],
    };
    this.result = this.pluralizationService.getPluralFormLocal(count, "ru", wordForms);
  }
}
```

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

---

## Keywords

angular, pluralization, internationalization, i18n, localization, language support, multi-language, ng, ngs-plural, plural
