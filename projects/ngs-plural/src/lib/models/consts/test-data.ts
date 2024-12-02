import { ILangWordForms } from '../interfaces/lang-word-forms.interface';
import { LanguageISO6391Enum } from '../enums/language-iso-639-1.enum';

export const APPLES: ILangWordForms = {
  [LanguageISO6391Enum.English]: ['apple', 'apples'],
  [LanguageISO6391Enum.Russian]: ['яблоко', 'яблока', 'яблок'],
  [LanguageISO6391Enum.Spanish]: ['manzana', 'manzanas'],
  [LanguageISO6391Enum.French]: ['pomme', 'pommes'],
  [LanguageISO6391Enum.Italian]: ['mela', 'mele'],
  [LanguageISO6391Enum.German]: ['Apfel', 'Äpfel'],
  [LanguageISO6391Enum.Portuguese]: ['maçã', 'maçãs'],
  [LanguageISO6391Enum.Dutch]: ['appel', 'appels'],
  [LanguageISO6391Enum.Swedish]: ['äpple', 'äpplen'],
  [LanguageISO6391Enum.Norwegian]: ['eple', 'epler'],
  [LanguageISO6391Enum.Danish]: ['æble', 'æbler'],
  [LanguageISO6391Enum.Romanian]: ['măr', 'mere'],
  [LanguageISO6391Enum.Catalan]: ['poma', 'pommes'],
  [LanguageISO6391Enum.Hungarian]: ['alma', 'almák'],
  [LanguageISO6391Enum.Finnish]: ['omena', 'omenat'],
  [LanguageISO6391Enum.Turkish]: ['elma', 'elmalar'],
};
