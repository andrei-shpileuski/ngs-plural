import { ILangWordForms } from '../interfaces/lang-word-forms.interface';
import { LanguageISO6391Enum } from '../enums/language-iso-639-1.enum';

export const APPLES: ILangWordForms = {
  [LanguageISO6391Enum.English]: ['apple', 'apples'],
  [LanguageISO6391Enum.Russian]: ['яблоко', 'яблока', 'яблок'],
  [LanguageISO6391Enum.Spanish]: ['manzana', 'manzanas'],
};
