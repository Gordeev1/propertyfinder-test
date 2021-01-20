import { Text } from 'react-native';
import BaseList from '@components/BaseList';
import { mainFont } from '@modules/Theme/styled';
import styled from '@utils/styled-components';
import { scale, scaleVertical } from '@utils/styles';

export const ConfiguredBaseList = styled(BaseList).attrs({
	containerStyle: {
		paddingLeft: 0,
		paddingRight: 0,
	},
})`` as typeof BaseList;

export const EmptyNote = styled(Text)`
	${mainFont};
	font-size: ${scale(16)};
	text-align: center;
	padding-horizontal: ${scale(10)};
	padding-vertical: ${scaleVertical(30)};
	color: ${(p) => p.theme.colors.fontMain};
`;
