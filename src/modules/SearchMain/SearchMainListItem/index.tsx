import React, { memo, useCallback } from 'react';
import { I18nManager, ViewProps } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { getMovieDBImageFullPath } from '@utils/images';
import {
	ConfiguredListItem,
	ConfiguredListItemTitle,
	ConfiguredListItemSubtitle,
	ConfiguredIcon,
} from './styled';

interface IProps extends Pick<ViewProps, 'testID'> {
	id: string;
	title: string;
	poster: string | null;
	releaseDate: string;
	rating: number;
	onPress: (id: string) => void;
}

export default memo(({ id, poster, title, releaseDate, rating, onPress, testID }: IProps) => {
	const handlePress = useCallback(() => onPress(id), [onPress, id]);
	return (
		<ConfiguredListItem testID={testID} onPress={handlePress} bottomDivider>
			<Avatar
				size={75}
				source={poster ? { uri: getMovieDBImageFullPath(poster) } : undefined}
			/>
			<ListItem.Content>
				<ConfiguredListItemTitle>{title}</ConfiguredListItemTitle>
				<ConfiguredListItemSubtitle>
					{releaseDate && `${new Date(releaseDate).getFullYear()},`} {rating}
				</ConfiguredListItemSubtitle>
			</ListItem.Content>
			<ConfiguredIcon name={I18nManager.isRTL ? 'chevron-left' : 'chevron-right'} />
		</ConfiguredListItem>
	);
});
