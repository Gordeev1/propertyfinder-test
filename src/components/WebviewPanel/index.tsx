import React, { memo } from 'react';
import { ViewProps } from 'react-native';
import Panel, { IPanelProps } from '@components/Panel';
import { Header, ConfiguredWebView, ConfiguredButton, ConfiguredIcon } from './styled';

interface IProps extends IPanelProps, Pick<ViewProps, 'testID'> {
	uri: string;
}

export default memo(({ testID, uri, onClosed = () => {}, ...props }: IProps) => (
	<Panel
		adjustToContentHeight
		onClosed={onClosed}
		HeaderComponent={
			<Header>
				<ConfiguredButton activeOpacity={0.7} onPress={onClosed}>
					<ConfiguredIcon name="close" size={20} />
				</ConfiguredButton>
			</Header>
		}
		{...props}
	>
		<ConfiguredWebView
			testID={testID}
			showsHorizontalScrollIndicator={false}
			source={{ uri }}
		/>
	</Panel>
));
