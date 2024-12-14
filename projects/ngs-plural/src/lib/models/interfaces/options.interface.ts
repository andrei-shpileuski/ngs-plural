import { LanguageISO6391Type } from '../types/language-iso-639-1.type';
import { ILangWordForms } from './lang-word-forms.interface';

export interface ILangOptions {
  lang?: LanguageISO6391Type;
}

export interface IPluralOptions extends ILangOptions {
  forms: ILangWordForms | string[];
}

export interface ITranslatePluralOptions extends ILangOptions {
  instant: string;
}
