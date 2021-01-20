import { Button } from 'react-native-elements';
import styled from '@utils/styled-components';

export const PrimaryButton = styled(Button).attrs((p) => ({
	titleStyle: {
		fontFamily: p.theme.fonts.main,
		color: 'black',
	},
	buttonStyle: {
		borderRadius: 10,
		backgroundColor: p.theme.colors.white,
	},
	loadingProps: {
		color: p.theme.colors.black,
	},
}))``;
