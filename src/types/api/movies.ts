import { IBaseListResponse } from '@LTypes/api/base';

export interface IGenre {
	id: string;
	name: string;
}

export interface IMovie {
	adult: boolean;
	backdrop_path: string | null;
	belongs_to_collection: null;
	budget: number;
	homepage: string;
	id: string;
	imdb_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string | null;
	release_date: string;
	revenue: number;
	runtime: number;
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	genres: IGenre[];
}

export interface IMoviePreview
	extends Pick<
		IMovie,
		| 'poster_path'
		| 'adult'
		| 'overview'
		| 'release_date'
		| 'id'
		| 'original_title'
		| 'original_language'
		| 'title'
		| 'backdrop_path'
		| 'popularity'
		| 'vote_count'
		| 'video'
		| 'vote_average'
	> {}

export interface ISearchMoviesResponse extends IBaseListResponse<IMoviePreview> {}
