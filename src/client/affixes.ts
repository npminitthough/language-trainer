import { FUSHA, LanguageVariant } from "./languageVariants";
import { PronounKey } from "./pronouns";
import { Tense } from "./types";

export interface Affix {
  prefix: string;
  suffix: string;
}



type AffixMap = Record<PronounKey, Affix>;

type Affixes = {
    [variant in LanguageVariant]: {
        [tense in Tense]: AffixMap;
    };
}

export const AFFIXES: Affixes = {
  [FUSHA]: {
    present: {
       "1s": { prefix: "أ", suffix: "" }, // أنا
       "2ms": { prefix: "ت", suffix: "" }, // أنتَ
       "2fs": { prefix: "ت", suffix: "ين" }, // أنتِ
       "2p": { prefix: "ت", suffix: "ون" }, // أنتم
       "1p": { prefix: "ن", suffix: "" }, // نحن
       "3p": { prefix: "ي", suffix: "ون" }, // هم
       "3fs": { prefix: "ت", suffix: "" }, // هي
       "3ms": { prefix: "ي", suffix: "" }, // هو
    },

    past: {
      "1s": { prefix: "", suffix: "تُ" }, // أنا
      "2ms": { prefix: "", suffix: "تَ" }, // أنتَ
      "2fs": { prefix: "", suffix: "تِ" }, // أنتِ
      "2p": { prefix: "", suffix: "تُم" }, // أنتم
      "1p": { prefix: "", suffix: "نَا" }, // نحن
      "3p": { prefix: "", suffix: "وا" }, // هم
      "3fs": { prefix: "", suffix: "تْ" }, // هي
      "3ms": { prefix: "", suffix: "" }, // هو
    },
  },
};
