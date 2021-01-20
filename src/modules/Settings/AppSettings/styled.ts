import { Text } from 'react-native';
import styled from '@utils/styled-components';
import { mainFontBold } from '@modules/Theme/styled';
import { scale, scaleVertical } from '@utils/styles';

export const Title = styled(Text)`
	${mainFontBold};
	text-align: left;
	font-size: ${scale(18)};
	color: ${(p) => p.theme.colors.fontMain};
	margin-bottom: ${scaleVertical(10)};
`;
