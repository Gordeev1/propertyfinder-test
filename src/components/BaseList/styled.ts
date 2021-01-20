import { StyleProp, ViewStyle } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styled from '@utils/styled-components';
import { scale } from '@utils/styles';

interface IProps {
	containerStyle: StyleProp<ViewStyle>;
}

export const List = styled(FlatList as new () => FlatList<any>).attrs<IProps>((p) => {
	const basePadding = scale(10)(p);
	return {
		contentContainerStyle: Object.assign(
			{
				paddingLeft: p.theme.insets.left + basePadding,
				paddingRight: p.theme.insets.right + basePadding,
			},
			p.containerStyle,
		),
	};
})``;
