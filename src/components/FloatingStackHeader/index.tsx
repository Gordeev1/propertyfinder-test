import { Header } from 'react-native-elements';
import { Animated } from 'react-native';
import styled from '@utils/styled-components';
import { scale } from '@utils/styles';

const AnimatedHeader = Animated.createAnimatedComponent(Header);

interface IInternalProps {
	title?: string;
}

export default styled(AnimatedHeader).attrs<IInternalProps>((p) => ({
	containerStyle: {
		position: 'absolute',
		top: 0,
		width: '100%',
		backgroundColor: p.theme.colors.stackHeader,
		borderBottomWidth: 1,
		borderBottomColor: p.theme.colors.stackHeaderBorder,
	},
	centerComponent: {
		text: p.title,
		style: {
			fontSize: scale(16)(p),
			fontFamily: p.theme.fonts.main,
			color: p.theme.colors.fontMain,
		},
	},
}))<IInternalProps>``;
