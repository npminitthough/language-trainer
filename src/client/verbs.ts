export type VerbType = 'sound' | 'hollow' | 'defective' | 'doubled' | 'hamzated';

export interface Verb {
    root: [string, string, string];
    type: VerbType;
}

const WRITE: Verb = {
  root: ["ك", "ت", "ب"],
  type: "sound",
};

const SAY: Verb = {
  root: ["ق", "و", "ل"],
  type: "hollow",
};