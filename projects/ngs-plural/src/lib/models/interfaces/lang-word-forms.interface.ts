import {
  IWordFormsDe,
  IWordFormsEn,
  IWordFormsEs,
  IWordFormsFr,
  IWordFormsIt,
  IWordFormsRu,
} from '../types/word-forms';

export interface ILangWordForms {
  ru?: IWordFormsRu;
  en?: IWordFormsEn;
  es?: IWordFormsEs;
  fr?: IWordFormsFr;
  de?: IWordFormsDe;
  it?: IWordFormsIt;
}
