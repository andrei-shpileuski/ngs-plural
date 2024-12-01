import {
  IWordFormsEn,
  IWordFormsEs,
  IWordFormsFr,
  IWordFormsRu,
} from '../types/word-forms';

export interface ILangWordForms {
  ru?: IWordFormsRu;
  en?: IWordFormsEn;
  es?: IWordFormsEs;
  fr?: IWordFormsFr;
}
