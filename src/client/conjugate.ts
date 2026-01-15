import { Affix, AFFIXES } from "./affixes";
import { FUSHA, LanguageVariant } from "./languageVariants";
import { PronounKey } from "./pronouns";
import {Tense} from './types/index';
import { Verb } from "./verbs";

type Root = [string, string, string];

// dispatch to specific conjugation functions based on verb type
export function conjugate(verb: Verb, pronounKey: PronounKey, tense: Tense, variant: LanguageVariant = FUSHA): string {
    switch(verb.type) {
        case "sound":
            return conjugateSound(verb.root, pronounKey, tense, variant);
        case "hollow":
            return conjugateHollow(verb.root, pronounKey, tense, variant);
        default:
            throw new Error("Unsupported verb type");
    }
}

export function conjugateSound(verbRoot: Root, pronounKey: PronounKey, tense: Tense, variant: LanguageVariant = FUSHA): string {
    const affixes = AFFIXES[variant][tense][pronounKey];
    const stem = buildStem(verbRoot);
    return applyAffixes(stem, affixes);
}

export function conjugateHollow(verbRoot: Root, pronounKey: PronounKey, tense: Tense, variant: LanguageVariant = FUSHA): string {
    const [r1, weak, r3] = verbRoot;
    const affixes = AFFIXES[variant][tense][pronounKey];
    // Past tense
    if (tense === 'past') {
        // Rule: In all other pronouns the middle letter is dropped
        let modifiedRoot = r1 + r3;
        if (pronounKey === '3ms') {
            // Rule: In 3ms, the middle, weak letter becomes alif
             modifiedRoot = r1 + 'ا' + r3;
        }

        return applyAffixes(modifiedRoot, affixes);

    }

    // Present tense
    // Rule: weak letter is unchanged
    const stem = r1 + weak + r3;
    return applyAffixes(stem, affixes);
}

function applyAffixes(stem: string, affixes: Affix): string {
    return `${affixes.prefix}${stem}${affixes.suffix}`;
}

function buildStem(letters: Root) {
    return letters.join('');
}