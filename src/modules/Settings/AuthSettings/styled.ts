import { Text, View } from 'react-native';
import styled from '@utils/styled-components';
import { mainFont, mainFontBold } from '@modules/Theme/styled';
import { scale, scaleVertical } from '@utils/styles';

export const Container = styled(View)`
	border-radius: 10;
	padding-horizontal: ${scale(10)};
	padding-vertical: ${scale(20)};
	background-color: ${(p) => p.theme.colors.accent};
	margin-bottom: ${scaleVertical(30)};
`;

export const Title = styled(Text)`
	${mainFontBold};
	text-align: left;
	font-size: ${scale(24)};
	color: ${(p) => p.theme.colors.white};
	margin-bottom: ${scale(20)};
`;

export const Description = styled(Text)`
	${mainFont};
	text-align: left;
	font-size: ${scale(14)};
	color: ${(p) => p.theme.colors.white};
	margin-bottom: ${scale(20)};
`;
