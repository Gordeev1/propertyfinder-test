import React, { ReactChild } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeProvider } from '@utils/styled-components';
import { useWindowSize } from '@hooks/useWindowSize';
import { useThemeName } from '@hooks/useThemeName';
import { themes } from './styled';

interface IProps {
	children?: ReactChild;
}

export default ({ children }: IProps) => {
	const [themeName] = useThemeName();
	const insets = useSafeAreaInsets();
	const windowSize = useWindowSize();

	const theme = {
		themeName,
		...themes[themeName],
		insets,
		windowSize,
	};

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
