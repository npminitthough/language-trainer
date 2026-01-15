
import { conjugate, conjugateHollow, conjugateSound } from '../conjugate';
import { Verb } from '../verbs';

describe('Conjugate Function Tests', () => {
  describe('conjugateSound', () => {
    
    test('should return the correct verb conjugation for first person past tense', () => {
      const verb: Verb = {type: "sound", root: ["ك", "ت", "ب"]}; // "to write"
      const pronounKey = "1s"; // أنا
      const tense = "past";
      const result = conjugate(verb, pronounKey, tense);
      expect(result).toBe("كتبتُ");
    });
  
    test('should return the correct verb conjugation for first person present tense', () => {
      const verb: Verb = {type: "sound", root: ["ك", "ت", "ب"]}; // "to write"
      const pronounKey = "1s"; // أنا
      const tense = "present";
      const result = conjugate(verb, pronounKey, tense);
      expect(result).toBe("أكتب");
    });
  })

  describe('conjugateHollow', () => {

    test('should return the correct verb conjugation for third person masculine singular past tense', () => {
      const verbRoot: [string, string, string] = ["ق", "و", "ل"]; // "to say"
      const pronounKey = "3ms"; // هو
      const tense = "past";
      const result = conjugateHollow(verbRoot, pronounKey, tense);
      expect(result).toBe("قال");
    })

    test('should return the correct verb conjugation for third person masculine singular present tense', () => {
      const verbRoot: [string, string, string] = ["ق", "و", "ل"]; // "to say"
      const pronounKey = "3ms"; // هو
      const tense = "present";
      const result = conjugateHollow(verbRoot, pronounKey, tense);
      expect(result).toBe("يقول");
    })

    test('should return the correct verb conjugation for first person singular past tense', () => {
      const verbRoot: [string, string, string] = ["ق", "و", "ل"]; // "to say"
      const pronounKey = "1s"; // أنا
      const tense = "past";
      const result = conjugateHollow(verbRoot, pronounKey, tense);
      expect(result).toBe("قلتُ");
    })
  })
});