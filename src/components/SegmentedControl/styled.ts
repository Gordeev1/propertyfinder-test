import SegmentedControl from '@react-native-community/segmented-control';
import styled from '@utils/styled-components';
import { isIOS } from '@constants';

export const ConfiguredSegmentedControlBase = styled(SegmentedControl).attrs((p) => ({
	tintColor: isIOS ? p.theme.colors.segmentedControlTintColor : undefined,
	fontStyle: {
		fontFamily: p.theme.colors.fontMain,
		color: isIOS ? p.theme.colors.segmentedControlTextColor : undefined,
	},
}))`
	flex: 2;
`;
