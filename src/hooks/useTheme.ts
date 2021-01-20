import { useContext } from 'react';
import { ThemeContext } from '@utils/styled-components';

export const useThemeColors = () => {
	const theme = useContext(ThemeContext);
	return theme.colors;
};
