import { Locale } from './i18n';

const dictionaries = {
	en: () => import('@/messages/en.json').then(m => m.default),
	uz: () => import('@/messages/uz.json').then(m => m.default),
	ru: () => import('@/messages/ru.json').then(m => m.default),
	ko: () => import('@/messages/ko.json').then(m => m.default),
};

export async function getDictionary(locale: Locale) {
	return dictionaries[locale]();
}
