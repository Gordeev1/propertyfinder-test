import {
	configureStore,
	ThunkAction,
	Action,
	combineReducers,
	getDefaultMiddleware,
	ThunkDispatch,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { isProductionBuild, PERSIST_TIMEOUT, CACHE_VERSION, PERSIST_KEY } from '@constants';
import rootSaga from '@store/sagas';

import user from '@store/slices/user';

const rootReducer = combineReducers({
	user,
});

export const mainPersistConfig = {
	key: PERSIST_KEY,
	storage: AsyncStorage,
	timeout: PERSIST_TIMEOUT,
	keyPrefix: CACHE_VERSION,
	whitelist: ['user'],
};
const persistedReducer = persistReducer(mainPersistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const middleware = [
	...getDefaultMiddleware({
		immutableCheck: false,
		serializableCheck: false,
	}),
	sagaMiddleware,
];

if (!isProductionBuild) {
	const logger = createLogger({});
	middleware.push(logger);
}

export const store = configureStore({
	reducer: persistedReducer,
	devTools: !isProductionBuild,
	middleware,
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type IStoreState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	IStoreState,
	unknown,
	Action<string>
>;

export type AppDispatch = ThunkDispatch<IStoreState, unknown, Action<string>>;
