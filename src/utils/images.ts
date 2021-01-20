import { MOVIEDB_IMAGES_URL } from '@constants/envs';

export function getMovieDBImageFullPath(path: string | null, size = 500) {
	return path ? `${MOVIEDB_IMAGES_URL}/w${size}${path}` : '';
}
