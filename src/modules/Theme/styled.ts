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
	activeTint: 'black',
	inactiveTint: 'grey',
	tabBar: 'white',
	tabBarBorder: 'grey',
	cardBackground: 'white',
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
		background: 'rgb(0, 0, 0)',
		activeTint: 'rgb(254, 254, 254)',
		inactiveTint: 'rgb(89, 94, 98)',
		tabBar: 'rgb(19, 21, 25)',
		tabBarBorder: 'rgb(22, 23, 29)',
	},
});

const customTheme = merge({}, baseTheme, {
	colors: {
		background: 'rgb(24, 25, 27)',
		activeTint: 'rgb(236, 117, 111)',
		inactiveTint: 'rgb(136, 142, 149)',
		tabBar: 'rgb(36, 37, 39)',
		tabBarBorder: 'rgb(36, 37, 39)',
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
