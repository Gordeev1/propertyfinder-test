import { Text, View } from 'react-native';
import { mainFontBold } from '@modules/Theme/styled';
import styled from '@utils/styled-components';
import { scale, scaleVertical } from '@utils/styles';

export const Container = styled(View)`
	padding-top: ${(p) => p.theme.insets.top + scaleVertical(30)(p)};
	margin-bottom: ${scaleVertical(30)};
	padding-horizontal: ${scale(30)};
`;

export const Title = styled(Text)`
	${mainFontBold};
	font-size: ${scale(35)};
	color: ${(p) => p.theme.colors.fontMain};
	text-align: center;
	margin-bottom: ${scale(5)};
`;

export const Subtitle = styled(Text)`
	${mainFontBold};
	font-size: ${scale(18)};
	color: ${(p) => p.theme.colors.fontSecondary};
	text-align: center;
`;
