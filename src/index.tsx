import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Theme from '@modules/Theme';
import { store, persistor } from '@store';
import { DeviceLanguageProvider, AppLanguageProvider } from '@i18n/languageProviders';
import App from './App';

export default () => {
	return (
		<SafeAreaProvider>
			<StoreProvider store={store}>
				<DeviceLanguageProvider>
					<AppLanguageProvider>
						{/* TODO: add loading view */}
						<PersistGate loading={null} persistor={persistor}>
							<Theme>
								<App />
							</Theme>
						</PersistGate>
					</AppLanguageProvider>
				</DeviceLanguageProvider>
			</StoreProvider>
		</SafeAreaProvider>
	);
};
