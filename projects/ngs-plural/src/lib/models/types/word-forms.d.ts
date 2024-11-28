export type IWordForms<L extends number> = FixedLengthArray<string, L>;

export type IWordFormsRu = IWordForms<3>;
export type IWordFormsEn = IWordForms<2>;
