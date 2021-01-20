import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { translate } from '@i18n';
import { THEME } from '@modules/Theme/enums';
import { AppThunk, IStoreState } from '@store';
import { handleError, showErrorMessage } from '@utils/error';
import AuthService from '@services/auth';

interface IState {
	authorization: boolean;
	authorized: boolean;
	themePreference: THEME | null;
}

const initialState: IState = {
	authorization: false,
	authorized: false,
	themePreference: null,
};

export const { reducer, actions } = createSlice({
	name: 'user',
	initialState,
	reducers: {
		auth(state) {
			state.authorization = true;
		},
		authSuccess(state) {
			state.authorized = true;
			state.authorization = false;
		},
		authFailed(state) {
			state.authorized = false;
			state.authorization = false;
		},
		logout(state) {
			state.authorized = false;
		},
		setTheme(state, { payload }: PayloadAction<THEME | null>) {
			state.themePreference = payload;
		},
	},
});

export default reducer;

export const authorize = (): AppThunk => async (dispatch) => {
	try {
		dispatch(actions.auth());
		await AuthService.authorize();
		dispatch(actions.authSuccess());
	} catch (error) {
		handleError(error);
		showErrorMessage({
			message: translate('errors.authFailed'),
			onRetryPress: () => dispatch(authorize()),
		});
		dispatch(actions.authFailed());
	}
};

const selectUserState = (state: IStoreState) => state.user;

export const selectUserAuthorization = createSelector(
	selectUserState,
	(state) => state.authorization,
);
export const selectUserAuthorized = createSelector(selectUserState, (state) => state.authorized);
export const selectUserThemePreference = createSelector(
	selectUserState,
	(state) => state.themePreference,
);
