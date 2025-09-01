export type Locale = 'en' | 'de' | 'ro'
export const locales: Locale[] = ['en', 'de', 'ro']
export const defaultLocale: Locale = 'en'

export async function getDictionary (locale: Locale) {
  switch (locale) {
    case 'de': return (await import('../dictionaries/de')).dictionary
    case 'ro': return (await import('../dictionaries/ro')).dictionary
    default:   return (await import('../dictionaries/en')).dictionary
  }
}