import { ThemeWithProps } from '@utils/styled-components';
import { ScaledSize } from 'react-native';

const TARGET_WIDTH = 414;
const TARGET_HEIGHT = 896;

const getCurrentScreenSize = ({ width, height }: ScaledSize) =>
	width < height ? [width, height] : [height, width];

export const scale = (value: number) => (params: ThemeWithProps | ScaledSize): number => {
	const [width] = getCurrentScreenSize('theme' in params ? params.theme.windowSize : params);
	return Number(((width / TARGET_WIDTH) * value).toFixed(2));
};

export const scaleVertical = (value: number) => (params: ThemeWithProps | ScaledSize): number => {
	const [, height] = getCurrentScreenSize('theme' in params ? params.theme.windowSize : params);
	return Number(((height / TARGET_HEIGHT) * value).toFixed(2));
};
