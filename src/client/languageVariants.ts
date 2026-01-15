
export const FUSHA = 'fusha' as const
export const LANGUAGE_VARIANTS = [FUSHA] as const
export type LanguageVariant = typeof LANGUAGE_VARIANTS[number]
