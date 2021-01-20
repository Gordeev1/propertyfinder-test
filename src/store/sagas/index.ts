import { fork } from 'redux-saga/effects';
import { moviesSagas } from '@store/sagas/movies';

export default function* rootSaga() {
	yield fork(moviesSagas);
}
