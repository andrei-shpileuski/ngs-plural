import { IWordFormsDefault, IWordFormsSlavic } from '../types/word-forms';

export interface ILangWordForms {
  ru?: IWordFormsSlavic;
  en?: IWordFormsDefault;
  es?: IWordFormsDefault;
  fr?: IWordFormsDefault;
  de?: IWordFormsDefault;
  it?: IWordFormsDefault;
}
