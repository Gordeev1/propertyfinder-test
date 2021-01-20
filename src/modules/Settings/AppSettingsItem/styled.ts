import { Text, View } from 'react-native';
import styled from '@utils/styled-components';
import { mainFont } from '@modules/Theme/styled';
import { scale, scaleVertical } from '@utils/styles';

export const Container = styled(View)`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-bottom-width: 1px;
	border-bottom-color: ${(p) => p.theme.colors.border};
	padding-vertical: ${scaleVertical(15)};
	padding-horizontal: ${scale(15)};
`;

export const Label = styled(Text)`
	${mainFont};
	font-size: ${scale(14)};
	color: ${(p) => p.theme.colors.fontMain};
	flex: 1;
	text-align: left;
`;

export const Value = styled(Text)`
	${mainFont};
	font-size: ${scale(14)};
	color: ${(p) => p.theme.colors.fontSecondary};
`;
