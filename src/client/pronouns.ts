// pronouns are variant specific

import { FUSHA } from "./languageVariants";

export type PronounKey =
  | "1s" // ""first_singular"
  | "2ms" // "second_masc_singular"
  | "2fs" // "second_fem_singular"
  | "3ms" // "third_masc_singular"
  | "3fs" // "third_fem_singular"
  | "1p" // "first_plural"
  | "2p" // "second_plural"
  | "3p" // "third_plural";

interface Pronouns {
  key: PronounKey;
  transliteration: string;
  value: string;
}

const fushaPronouns: Pronouns[] = [
  { key: "1s", transliteration: "ana", value: "أنا" },
  { key: "2ms", transliteration: "anta", value: "أنتَ" },
  { key: "2fs", transliteration: "anti", value: "أنتِ" },
  { key: "2p", transliteration: "antum", value: "أنتم" },
  { key: "1p", transliteration: "nahnu", value: "نحن" },
  { key: "3p", transliteration: "hum", value: "هم" },
  { key: "3fs", transliteration: "hiya", value: "هي" },
  { key: "3ms", transliteration: "huwa", value: "هو" },
];

export const PRONOUNS = {
  [FUSHA]: fushaPronouns,
} as const;
