import { I18nManager } from 'react-native';
import { SearchBar } from 'react-native-elements';
import styled from '@utils/styled-components';

export const ConfiguredSearchBar = styled(SearchBar).attrs((p) => ({
	containerStyle: {
		paddingTop: p.theme.insets.top || undefined,
		paddingLeft: p.theme.insets.left || undefined,
		paddingRight: p.theme.insets.right || undefined,
		backgroundColor: p.theme.colors.searchHeader,
		borderBottomColor: p.theme.colors.stackHeaderBorder,
	},
	inputContainerStyle: {
		backgroundColor: p.theme.colors.inputColor,
	},
	round: true,
	placeholderTextColor: p.theme.colors.fontSecondary,
	inputStyle: {
		color: p.theme.colors.fontMain,
		fontFamily: p.theme.fonts.main,
		textAlign: I18nManager.isRTL ? 'right' : 'left',
	},
}))``;
