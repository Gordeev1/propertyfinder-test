import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Theme from '@modules/Theme';
import { store, persistor } from '@store';
import { useI18nConfig } from '@i18n';
import App from './App';

export default () => {
	const configured = useI18nConfig();

	return (
		<SafeAreaProvider>
			<StoreProvider store={store}>
				{/* TODO: add loading view */}
				<PersistGate loading={null} persistor={persistor}>
					<Theme>{configured ? <App /> : undefined}</Theme>
				</PersistGate>
			</StoreProvider>
		</SafeAreaProvider>
	);
};
