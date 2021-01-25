import { Icon, ListItem } from 'react-native-elements';
import { mainFont } from '@modules/Theme/styled';
import styled from '@utils/styled-components';
import { scale } from '@utils/styles';

export const ConfiguredListItem = styled(ListItem).attrs((p) => ({
	containerStyle: {
		backgroundColor: p.theme.colors.background,
		borderColor: p.theme.colors.inactiveTint,
		paddingLeft: p.theme.insets.left || undefined,
		paddingRight: p.theme.insets.right || undefined,
	},
}))``;

export const ConfiguredListItemTitle = styled(ListItem.Title)`
	${mainFont};
	color: ${(p) => p.theme.colors.fontMain};
	font-size: ${scale(16)};
`;

export const ConfiguredListItemSubtitle = styled(ListItem.Subtitle)`
	${mainFont};
	color: ${(p) => p.theme.colors.fontSecondary};
	font-size: ${scale(14)};
`;

export const ConfiguredIcon = styled(Icon).attrs((p) => ({
	color: p.theme.colors.inactiveTint,
}))``;
