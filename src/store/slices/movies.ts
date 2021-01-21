import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import merge from 'lodash/merge';
import { translate } from '@i18n';
import { AppThunk, IStoreState } from '@store';
import { handleError, showErrorMessage } from '@utils/error';
import MovieDBService from '@services/moviedb';
import NavigationService from '@services/navigation';
import { IMovie, IMoviePreview } from '@LTypes/api/movies';

interface IState {
	loading: boolean;
	loadingById: Record<string, boolean>;
	searching: boolean;
	searchQuery: string;
	bySearch: string[];
	items: Record<string, IMovie | IMoviePreview>;
}

const initialState: IState = {
	loading: false,
	loadingById: {},
	searching: false,
	searchQuery: '',
	items: {},
	bySearch: [],
};

export const { reducer, actions } = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		loadMovieById(state, { payload }: PayloadAction<{ id: string }>) {
			state.loadingById[payload.id] = true;
		},
		loadMovieByIdSuccess(state, { payload }: PayloadAction<{ id: string; data: IMovie }>) {
			state.items[payload.id] = payload.data;
			state.loadingById[payload.id] = false;
		},
		loadMovieByIdFail(state, { payload }: PayloadAction<{ id: string }>) {
			state.loadingById[payload.id] = false;
		},
		setSearchQuery(state, { payload }: PayloadAction<string>) {
			state.searchQuery = payload;
			if (!payload) {
				state.bySearch = [];
			}
		},
		search(state) {
			state.searching = true;
			state.bySearch = [];
		},
		searchSuccess(state, { payload }: PayloadAction<IMovie[]>) {
			const ids = payload.map((item) => item.id);
			const items: IState['items'] = Object.assign(
				{},
				...payload.map((item) => ({ [item.id]: item })),
			);
			state.bySearch = ids;
			merge(state.items, items);
			state.searching = false;
		},
		searchFail(state) {
			state.searching = false;
		},
	},
});

export const loadMovieDetails = (id: string): AppThunk => async (dispatch) => {
	try {
		dispatch(actions.loadMovieById({ id }));
		const data = await MovieDBService.getById(id);
		dispatch(actions.loadMovieByIdSuccess({ data, id }));
	} catch (error) {
		dispatch(actions.loadMovieByIdFail({ id }));
		handleError(error);

		const is404 = error?.response?.status === 404;

		showErrorMessage({
			message: is404
				? translate('errors.movieByIdNotFound')
				: translate('errors.movieLoadFailed'),
			onRetryPress: is404 ? undefined : () => dispatch(loadMovieDetails(id)),
		});

		if (is404) {
			NavigationService.pop();
		}
	}
};

export default reducer;

const selectMoviesState = (state: IStoreState) => state.movies;

const selectMoviesItems = createSelector(selectMoviesState, (state) => state.items);
const selectLoadingByIds = createSelector(selectMoviesState, (state) => state.loadingById);

export const selectMovieById = createSelector<
	IStoreState,
	string,
	IState['items'],
	string,
	IMovie | IMoviePreview
>(
	selectMoviesItems,
	(_, id) => id,
	(items, id) => items[id],
);

export const selectMovieLoadingById = createSelector<
	IStoreState,
	string,
	IState['loadingById'],
	string,
	boolean
>(
	selectLoadingByIds,
	(_, id) => id,
	(items, id) => Boolean(items[id]),
);

export const selectMoviesSearching = createSelector(selectMoviesState, (state) => state.searching);

export const selectMoviesSearchQuery = createSelector(
	selectMoviesState,
	(state) => state.searchQuery,
);

export const selectMoviesHasSearchQuery = createSelector(selectMoviesSearchQuery, Boolean);

const selectMoviesIdsBySearch = createSelector(selectMoviesState, (state) => state.bySearch);

export const selectMoviesBySeach = createSelector(
	selectMoviesIdsBySearch,
	selectMoviesItems,
	(ids, items) => ids.map((id) => items[id]),
);
