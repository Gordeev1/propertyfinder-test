export interface IBaseListResponse<T> {
	page: number;
	total_results: number;
	total_pages: number;
	results: T[];
}

export interface IListFormattedResponse<T> {
	data: T[];
	hasMore: boolean;
	pageCursorNext: number;
}
