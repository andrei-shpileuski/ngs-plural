import { FixedLengthArray } from './fixed-length-array';

export type IWordForms<L extends number> = FixedLengthArray<string, L>;

export type IWordFormsDefault = IWordForms<2>;
export type IWordFormsSlavic = IWordForms<3>;

export type PossibleWordForms = IWordFormsDefault | IWordFormsSlavic;
