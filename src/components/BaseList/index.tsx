import React, { memo, forwardRef, Ref, useMemo } from 'react';
import { FlatListProps, Keyboard, ViewStyle, StyleProp, RefreshControl } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ContainerCenter from '@components/ContainerCenter';
import Spinner from '@components/Spinner';
import { List } from './styled';

interface IBaseItem {
	id: string;
}

export interface IBaseListProps<T> extends Omit<FlatListProps<T>, 'contentContainerStyle'> {
	loading?: boolean;
	emptyPlaceholder?: JSX.Element;
	ref?: Ref<FlatList<T> | undefined>;
	containerStyle?: StyleProp<ViewStyle>;
	keyExtractor?: (item: T, index: number) => string;
}

const getKeyExtractor = (item: IBaseItem) => item.id + '';

const loader = <Spinner paddingAreaSize={25} size="large" />;

function BaseList<T>(
	{ emptyPlaceholder, loading, refreshing, keyExtractor, ...props }: IBaseListProps<T>,
	ref: Ref<FlatList<T> | undefined>,
) {
	const emptyComponent = useMemo(
		() => (emptyPlaceholder ? <ContainerCenter>{emptyPlaceholder}</ContainerCenter> : null),
		[emptyPlaceholder],
	);

	return (
		<List
			ref={ref as any}
			keyboardShouldPersistTaps="handled"
			keyExtractor={keyExtractor || getKeyExtractor}
			ListFooterComponent={loading && !refreshing ? loader : null}
			ListEmptyComponent={!loading && !refreshing ? emptyComponent : null}
			onEndReachedThreshold={0.01}
			scrollEventThrottle={16}
			onMomentumScrollBegin={Keyboard.dismiss}
			showsVerticalScrollIndicator={false}
			refreshControl={
				props.onRefresh ? (
					<RefreshControl refreshing={Boolean(refreshing)} onRefresh={props.onRefresh} />
				) : undefined
			}
			{...props}
		/>
	);
}

export default memo(forwardRef(BaseList)) as typeof BaseList;
