import { I18nManager } from 'react-native';
import i18n, { TranslateOptions } from 'i18n-js';
import memoize from 'lodash/memoize';
import { Locales } from './enums';

interface I18nServiceState {
	language: Locales;
	isRTL: boolean;
}

export const defaultLanguageState: I18nServiceState = {
	language: Locales.EN,
	isRTL: false,
};

class I18nService {
	client = i18n;

	state: I18nServiceState = {
		language: Locales.EN,
		isRTL: false,
	};

	translationGetters = {
		[Locales.EN]: () => require('./locales/en.json') as object,
		[Locales.AR]: () => require('./locales/ar.json') as object,
	};

	translator = memoize(
		(key: string, config?: TranslateOptions) => this.client.t(key, config),
		(key: string, config?: TranslateOptions) => (config ? key + JSON.stringify(config) : key),
	);

	constructor() {
		this.updateLocale(this.state.language);
	}

	private updateLocale(language: Locales) {
		if (this.translator.cache.clear) {
			this.translator.cache.clear();
		}

		this.client.locale = language;
		this.client.translations = {
			[language]: this.translationGetters[language](),
		};
	}

	update({ language, isRTL }: I18nServiceState) {
		if ((isRTL && !I18nManager.isRTL) || (!isRTL && I18nManager.isRTL)) {
			I18nManager.forceRTL(isRTL);
		}

		if (language !== this.state.language) {
			this.updateLocale(language);
		}

		this.state = { language, isRTL };
	}
}

export default new I18nService();
