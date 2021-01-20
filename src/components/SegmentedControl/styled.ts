import SegmentedControl from '@react-native-community/segmented-control';
import styled from '@utils/styled-components';

export const ConfiguredSegmentedControlBase = styled(SegmentedControl).attrs((p) => ({
	tintColor: p.theme.colors.segmentedControlTintColor,
	fontStyle: {
		fontFamily: p.theme.colors.fontMain,
		color: p.theme.colors.segmentedControlTextColor,
	},
}))`
	flex: 2;
`;
