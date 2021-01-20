import { ScaledSize } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';
import merge from 'lodash/merge';
import { css, ThemeWithProps } from '@utils/styled-components';
import { THEME } from './enums';

const colors = {
	white: 'white',
	black: 'black',
	fontMain: 'black',
	fontSecondary: 'grey',
	border: 'rgb(201, 222, 244)',
	shadow: 'rgba(0, 0, 0, 0.3)',
	background: 'white',
	searchHeader: 'white',
	inputColor: 'rgb(235, 237, 242)',
	stackHeader: 'white',
	stackHeaderBorder: 'rgb(201, 222, 244)',
	activeTint: 'black',
	inactiveTint: 'grey',
	tabBar: 'white',
	tabBarBorder: 'grey',
	cardBackground: 'white',
	accent: 'rgb(1, 36, 255)',
	movieDetailsOverlayFrom: 'rgba(255, 255, 255, 1)',
	movieDetailsOverlayTo: 'rgba(255, 255, 255, 0)',
	segmentedControlTextColor: 'grey',
	segmentedControlTintColor: 'white',
};

const fonts = {
	main: 'Roboto',
	mainBold: 'Roboto Bold',
};

const baseTheme = {
	colors,
	fonts,
};

const lightTheme = { ...baseTheme };

const darkTheme = merge({}, baseTheme, {
	colors: {
		fontMain: 'white',
		fontSecondary: 'rgb(83, 97, 127)',
		border: 'rgb(25, 28, 34)',
		shadow: 'rgba(83, 97, 127, 0.3)',
		background: 'rgb(0, 0, 0)',
		searchHeader: 'rgb(19, 21, 25)',
		inputColor: 'rgb(25, 27, 36)',
		stackHeader: 'rgb(19, 21, 25)',
		stackHeaderBorder: 'rgb(22, 23, 29)',
		activeTint: 'rgb(254, 254, 254)',
		inactiveTint: 'rgb(89, 94, 98)',
		tabBar: 'rgb(19, 21, 25)',
		tabBarBorder: 'rgb(22, 23, 29)',
		cardBackground: 'rgb(18, 19, 28)',
		movieDetailsOverlayFrom: 'rgba(0, 0, 0, 1)',
		movieDetailsOverlayTo: 'rgba(0, 0, 0, 0)',
		segmentedControlTextColor: 'rgb(83, 97, 127)',
		segmentedControlTintColor: 'rgb(83, 97, 127)',
	},
});

const customTheme = merge({}, baseTheme, {
	colors: {
		fontMain: 'rgb(136, 142, 149)',
		fontSecondary: 'white',
		border: 'rgb(78, 81, 86)',
		shadow: 'rgba(136, 142, 149, 0.1)',
		background: 'rgb(24, 25, 27)',
		searchHeader: 'rgb(36, 37, 39)',
		inputColor: 'rgb(30, 32, 35)',
		stackHeader: 'rgb(36, 37, 39)',
		stackHeaderBorder: 'rgb(36, 37, 39)',
		activeTint: 'rgb(236, 117, 111)',
		inactiveTint: 'rgb(136, 142, 149)',
		tabBar: 'rgb(36, 37, 39)',
		tabBarBorder: 'rgb(36, 37, 39)',
		cardBackground: 'rgb(24, 25, 27)',
		accent: 'rgb(236, 117, 111)',
		movieDetailsOverlayFrom: 'rgba(24, 25, 27, 1)',
		movieDetailsOverlayTo: 'rgba(24, 25, 27, 0)',
		segmentedControlTextColor: 'white',
		segmentedControlTintColor: 'white',
	},
});

export const themes = {
	[THEME.Light]: lightTheme,
	[THEME.Dark]: darkTheme,
	[THEME.Custom]: customTheme,
};

type Theme = Readonly<typeof baseTheme>;

export type BaseTheme = Theme & {
	themeName: THEME;
	insets: EdgeInsets;
	windowSize: ScaledSize;
};

export const mainFont = ({ theme }: ThemeWithProps) => `
	font-family: ${theme.fonts.main};
`;

export const mainFontBold = ({ theme }: ThemeWithProps) => `
	font-family: ${theme.fonts.mainBold};
	font-weight: 700;
`;

const createWhenTheme = (targetTheme: THEME) => (code: string) => css`
	${(p) => p.theme.themeName === targetTheme && code};
`;

export const whenThemeLight = createWhenTheme(THEME.Light);
export const whenThemeDark = createWhenTheme(THEME.Dark);
export const whenThemeCustom = createWhenTheme(THEME.Custom);
