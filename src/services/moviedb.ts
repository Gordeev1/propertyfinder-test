import axios from 'axios';
import { MOVIEDB_BASE_URL, MOVIEDB_API_KEY } from '@constants/envs';
import { ISearchMoviesResponse, IMovie } from '@LTypes/api/movies';
import I18nService from '@i18n/service';

class MovieDBService {
	readonly client = axios.create({
		baseURL: `${MOVIEDB_BASE_URL}/3`,
	});

	constructor() {
		this.client.interceptors.request.use(async (config) => {
			config.params = {
				api_key: MOVIEDB_API_KEY,
				language: I18nService.client.locale,
				...(config.params || {}),
			};
			return config;
		}, Promise.reject);
	}

	searchMovies({ query, page }: { query: string; page: number }) {
		return this.client
			.get<ISearchMoviesResponse>('/search/movie', {
				params: { query, page },
			})
			.then(({ data }) => data.results);
	}

	getById(id: string) {
		return this.client
			.get<IMovie>(`/movie/${id}`, { params: { append_to_response: 'videos' } })
			.then(({ data }) => data);
	}
}

export default new MovieDBService();
