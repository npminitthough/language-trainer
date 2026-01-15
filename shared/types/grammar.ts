// src/shared/types/grammar.ts
export const PRONOUNS = [
  "1s",
  "2sm",
  "2sf",
  "3sm",
  "3sf",
  "2p",
  "3p",
] as const;

export type Pronoun = typeof PRONOUNS[number];

export const TENSES = ["past", "present"] as const;
export type Tense = typeof TENSES[number];

export type VerbType = "sound" | "hollow";