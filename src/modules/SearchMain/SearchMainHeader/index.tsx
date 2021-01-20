import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectMoviesSearching,
	selectMoviesSearchQuery,
	actions as moviesActions,
} from '@store/slices/movies';
import { translate } from '@i18n';
import { ConfiguredSearchBar } from './styled';

export default memo(() => {
	const value = useSelector(selectMoviesSearchQuery);
	const searching = useSelector(selectMoviesSearching);

	const dispatch = useDispatch();

	const handleSearchChange = useCallback(
		(nextValue: string) => dispatch(moviesActions.setSearchQuery(nextValue)),
		[dispatch],
	);

	return (
		<ConfiguredSearchBar
			testID="searchMain.input"
			placeholder={translate('searchMain.headerInputPlaceholder')}
			onChangeText={handleSearchChange}
			value={value}
			showLoading={searching}
		/>
	);
});
