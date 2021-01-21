import React, { memo } from 'react';
import { ViewProps } from 'react-native';
import { Container, Title, Subtitle } from './styled';

interface IProps extends ViewProps {
	title: string;
	subtitle: string;
}

export default memo(({ title, subtitle, ...props }: IProps) => (
	<Container {...props}>
		<Title>{title}</Title>
		<Subtitle>{subtitle}</Subtitle>
	</Container>
));
