import { put, throttle } from 'redux-saga/effects';
import { actions as moviesActions } from '@store/slices/movies';
import MovieDBService from '@services/moviedb';
import { handleError, showErrorMessage } from '@utils/error';
import { translate } from '@i18n';

function* handleMoviesSearch(action: ReturnType<typeof moviesActions.setSearchQuery>) {
	if (action.payload) {
		try {
			yield put(moviesActions.search());
			const data = yield MovieDBService.searchMovies({
				query: action.payload,
				// NOTE: getting only top results
				page: 1,
			});
			yield put(moviesActions.searchSuccess(data));
		} catch (error) {
			yield put(moviesActions.searchFail());
			handleError(error);
			showErrorMessage({ message: translate('errors.moviesSeachFailed') });
		}
	}
}

export function* moviesSagas() {
	yield throttle(1000, moviesActions.setSearchQuery.type, handleMoviesSearch);
}
