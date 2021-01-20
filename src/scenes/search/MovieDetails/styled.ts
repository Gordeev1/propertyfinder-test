import { ScrollView } from 'react-native-gesture-handler';
import { Animated } from 'react-native';
import styled from '@utils/styled-components';

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

export const ConfiguredScrollView = styled(AnimatedScrollView)``;
