import { ScrollView } from 'react-native-gesture-handler';
import styled from '@utils/styled-components';
import { scale, scaleVertical } from '@utils/styles';

export const Container = styled(ScrollView).attrs((p) => ({
	contentContainerStyle: {
		paddingLeft: p.theme.insets.left + scale(15)(p),
		paddingRight: p.theme.insets.right + scale(15)(p),
		paddingBottom: scaleVertical(15)(p),
	},
}))``;
