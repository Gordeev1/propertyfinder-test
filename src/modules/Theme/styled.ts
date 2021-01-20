import { ScaledSize } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';
import merge from 'lodash/merge';
import { css, ThemeWithProps } from '@utils/styled-components';
import { THEME } from './enums';

const colors = {
	white: 'white',
	black: 'black',
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

const darkTheme = merge({}, baseTheme, {});

const customTheme = merge({}, baseTheme, {});

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
