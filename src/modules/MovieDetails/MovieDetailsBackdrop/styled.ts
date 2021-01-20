import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import styled from '@utils/styled-components';
import { scaleVertical } from '@utils/styles';

export const Container = styled(View)`
	margin-bottom: ${scaleVertical(-100)};
`;

const Overlay = (styled(LinearGradient).attrs({
	start: { x: 1, y: 0 },
	end: { x: 1, y: 1 },
})`
	width: 100%;
	height: ${scaleVertical(125)};
	position: absolute;
` as any) as typeof LinearGradient;

export const OverlayTop = styled(Overlay).attrs((p) => ({
	colors: [p.theme.colors.movieDetailsOverlayFrom, p.theme.colors.movieDetailsOverlayTo],
}))``;

export const OverlayBottom = styled(Overlay).attrs((p) => ({
	colors: [p.theme.colors.movieDetailsOverlayTo, p.theme.colors.movieDetailsOverlayFrom],
}))`
	bottom: 0;
`;

export const BackgroundImage = styled(FastImage).attrs({ resizeMode: 'cover' })`
	width: 100%;
	height: ${scaleVertical(350)};
`;
