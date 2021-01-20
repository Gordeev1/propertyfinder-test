import { TouchableOpacity, View } from 'react-native';
import WebView from 'react-native-webview';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from '@utils/styled-components';
import { scale, scaleVertical } from '@utils/styles';

export const ConfiguredWebView = styled(WebView).attrs((p) => ({
	containerStyle: {
		backgroundColor: p.theme.colors.background,
	},
}))`
	width: 100%;
	height: ${(p) => p.theme.windowSize.height * 0.85};
	background-color: ${(p) => p.theme.colors.background};
`;

export const Header = styled(View)`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	border-bottom-color: ${(p) => p.theme.colors.stackHeaderBorder};
	background-color: ${(p) => p.theme.colors.stackHeader};
	border-bottom-width: 1;
	border-top-left-radius: ${scale(12)};
	border-top-right-radius: ${scale(12)};
`;

export const ConfiguredButton = styled(TouchableOpacity)`
	padding-vertical: ${scaleVertical(10)}
	padding-horizontal: ${scale(10)};
`;

export const ConfiguredIcon = styled(Icon).attrs((p) => ({
	color: p.theme.colors.activeTint,
	size: scale(22)(p),
}))``;
