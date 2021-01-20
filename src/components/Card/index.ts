import { View } from 'react-native';
import { whenThemeCustom, whenThemeLight } from '@modules/Theme/styled';
import styled from '@utils/styled-components';

export default (styled(View)`
	border-radius: 10;
	background-color: ${(p) => p.theme.colors.cardBackground};

	${(p) =>
		whenThemeLight(`
		box-shadow: 3px 5px 10px ${p.theme.colors.shadow};
		elevation: 7;
	`)}
	${(p) =>
		whenThemeCustom(`
		border: 1px solid ${p.theme.colors.border};
	`)}
` as any) as typeof View;
