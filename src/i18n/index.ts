import { useEffect, useCallback, useState } from 'react';
import { I18nManager } from 'react-native';
import * as RNLocalize from 'react-native-localize';
import i18n, { TranslateOptions } from 'i18n-js';
import memoize from 'lodash/memoize';

enum Locales {
	EN = 'en',
	AR = 'ar',
}

const translationGetters = {
	[Locales.EN]: require('./locales/en.json'),
	[Locales.AR]: require('./locales/ar.json'),
};

export const translate = memoize(
	(key: string, config?: TranslateOptions) => i18n.t(key, config),
	(key: string, config?: TranslateOptions) => (config ? key + JSON.stringify(config) : key),
);

const fallback = { languageTag: Locales.EN, isRTL: false };

export function useI18nConfig() {
	const [language, setLanguage] = useState(fallback.languageTag);
	const [configured, setConfigured] = useState(false);

	const updateI18nConfig = useCallback(() => {
		const { languageTag, isRTL } =
			RNLocalize.findBestAvailableLanguage<Locales>(
				Object.keys(translationGetters) as Locales[],
			) || fallback;

		if (translate.cache.clear) {
			translate.cache.clear();
		}

		I18nManager.forceRTL(isRTL);

		i18n.translations = {
			[languageTag]: translationGetters[languageTag],
		};

		i18n.locale = languageTag;

		if (languageTag !== language) {
			setLanguage(languageTag);
		}

		if (!configured) {
			setConfigured(true);
		}
	}, [language, configured]);

	useEffect(() => {
		updateI18nConfig();
		RNLocalize.addEventListener('change', updateI18nConfig);
		return () => RNLocalize.removeEventListener('change', updateI18nConfig);
	}, [updateI18nConfig]);

	return configured && language;
}
