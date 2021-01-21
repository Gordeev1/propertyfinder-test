import { Locales } from './enums';

export const dateLocales = {
	[Locales.EN]: () => undefined,
	[Locales.AR]: () => require('date-fns/esm/locale/ar'),
};
