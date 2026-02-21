export const locales = ['en', 'uz', 'ru', 'ko'] as const;
export const defaultLocale = 'en';

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
	en: 'English',
	uz: 'O‘zbek',
	ru: 'Русский',
	ko: '한국어',
};

export const localeFlags: Record<Locale, string> = {
	en: '🇺🇸',
	uz: '🇺🇿',
	ru: '🇷🇺',
	ko: '🇰🇷',
};
