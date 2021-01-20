import React, { useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MovieDetailsScene from '@scenes/search/MovieDetails';
import SearchMainScene from '@scenes/search/SearchMain';
import { useThemeColors } from '@hooks/useTheme';
import { SEARCH_SCENES } from './enums';

export interface SearchStackParamList extends Record<string, object | undefined> {
	[SEARCH_SCENES.Main]: undefined;
	[SEARCH_SCENES.MovieDetails]: { id: string };
}

const SearchStack = createStackNavigator<SearchStackParamList>();

export const SearchStackScreen = () => {
	const colors = useThemeColors();

	const screenOptions = useMemo(
		() => ({
			cardStyle: { backgroundColor: colors.background },
		}),
		[colors.background],
	);

	return (
		<SearchStack.Navigator
			headerMode="none"
			screenOptions={screenOptions}
			initialRouteName={SEARCH_SCENES.Main}
		>
			<SearchStack.Screen name={SEARCH_SCENES.Main} component={SearchMainScene} />
			<SearchStack.Screen name={SEARCH_SCENES.MovieDetails} component={MovieDetailsScene} />
		</SearchStack.Navigator>
	);
};
