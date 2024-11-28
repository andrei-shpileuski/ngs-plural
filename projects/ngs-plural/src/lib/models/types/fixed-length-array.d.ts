type _FixedLengthArray<
  T,
  L extends number,
  R extends unknown[],
> = R['length'] extends L ? R : _FixedLengthArray<T, L, [T, ...R]>;

export type FixedLengthArray<T, L extends number> = L extends L
  ? number extends L
    ? T[]
    : _FixedLengthArray<T, L, []>
  : never;
