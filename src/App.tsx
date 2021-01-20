import React from 'react';
import { StatusBar } from 'react-native';
import Scenes from '@scenes';
import { useThemeName } from '@hooks/useThemeName';
import { THEME } from '@modules/Theme/enums';

export default () => {
	const [themeName] = useThemeName();

	return (
		<>
			<StatusBar
				barStyle={themeName === THEME.Light ? 'dark-content' : 'light-content'}
				backgroundColor="transparent"
				translucent
				animated
			/>
			<Scenes />
		</>
	);
};
