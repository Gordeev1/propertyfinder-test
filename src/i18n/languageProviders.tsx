import React, {
	useEffect,
	useCallback,
	useState,
	createContext,
	PropsWithChildren,
	useContext,
	useLayoutEffect,
} from 'react';
import * as RNLocalize from 'react-native-localize';
import I18nService, { defaultLanguageState } from './service';
import { Locales } from './enums';

export const DeviceLanguageContext = createContext(defaultLanguageState);

export function DeviceLanguageProvider({ children }: PropsWithChildren<{}>) {
	const [state, setState] = useState(defaultLanguageState);
	const [configured, setConfigured] = useState(false);

	const update = useCallback(() => {
		const result = RNLocalize.findBestAvailableLanguage<Locales>(Object.values(Locales));

		if (result) {
			setState({ language: result.languageTag, isRTL: result.isRTL });
		}

		if (!configured) {
			setConfigured(true);
		}
	}, [setState, configured, setConfigured]);

	useEffect(() => {
		update();
		RNLocalize.addEventListener('change', update);
		return () => RNLocalize.removeEventListener('change', update);
	}, [update]);

	return (
		<DeviceLanguageContext.Provider value={state}>
			{configured && children}
		</DeviceLanguageContext.Provider>
	);
}

const AppLanguageContext = createContext(defaultLanguageState);

export function AppLanguageProvider({ children }: PropsWithChildren<{}>) {
	const deviceLanguage = useContext(DeviceLanguageContext);
	// const deviceLanguage = useSelector(selectUserLanguagePreference);

	const targetLanguage = deviceLanguage;

	useLayoutEffect(() => {
		I18nService.update(targetLanguage);
	}, [targetLanguage]);

	return (
		<AppLanguageContext.Provider value={targetLanguage}>{children}</AppLanguageContext.Provider>
	);
}
