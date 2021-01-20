import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { THEME } from '@modules/Theme/enums';
import { IStoreState } from '@store';

interface IState {
	themePreference: THEME | null;
}

const initialState: IState = {
	themePreference: null,
};

export const { reducer, actions } = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setTheme(state, { payload }: PayloadAction<THEME | null>) {
			state.themePreference = payload;
		},
	},
});

export default reducer;

const selectUserState = (state: IStoreState) => state.user;

export const selectUserThemePreference = createSelector(
	selectUserState,
	(state) => state.themePreference,
);
