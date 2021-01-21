import React, { memo, useCallback } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import SearchMainListItem from '@modules/SearchMain/SearchMainListItem';
import { IBaseListProps } from '@components/BaseList';
import { IMoviePreview } from '@LTypes/api/movies';
import { SEARCH_SCENES } from '@scenes/search/enums';
import {
	selectMoviesBySeach,
	selectMoviesHasSearchQuery,
	selectMoviesSearching,
} from '@store/slices/movies';
import { translate } from '@i18n';
import { ConfiguredBaseList, EmptyNote } from './styled';

interface IProps extends Omit<IBaseListProps<IMoviePreview>, 'renderItem' | 'data'> {}

export default memo((props: IProps) => {
	const searching = useSelector(selectMoviesSearching);
	const hasSearchQuery = useSelector(selectMoviesHasSearchQuery);
	const results = useSelector(selectMoviesBySeach);

	const navigation = useNavigation();

	const openMovieDetailsScene = useCallback(
		(id: string) => navigation.navigate(SEARCH_SCENES.MovieDetails, { id }),
		[navigation],
	);

	const renderItem = useCallback(
		({ item, index }: ListRenderItemInfo<IMoviePreview>) => (
			<SearchMainListItem
				id={item.id}
				title={item.title}
				rating={item.vote_average}
				poster={item.backdrop_path || item.poster_path}
				releaseDate={item.release_date}
				onPress={openMovieDetailsScene}
				testID={`searchMain.searchMainListItem-${index + 1}`}
			/>
		),
		[openMovieDetailsScene],
	);

	const emptyPlaceholder = hasSearchQuery ? (
		<EmptyNote testID="searchMain.noResultsFoundNote">
			{translate('searchMain.noResultsFoundNote')}
		</EmptyNote>
	) : undefined;

	return (
		<ConfiguredBaseList<IMoviePreview>
			data={results}
			loading={searching}
			renderItem={renderItem}
			emptyPlaceholder={emptyPlaceholder}
			{...props}
		/>
	);
});
