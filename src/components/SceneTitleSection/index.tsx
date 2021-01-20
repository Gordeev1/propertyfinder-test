import React, { memo } from 'react';
import { Container, Title, Subtitle } from './styled';

interface IProps {
	title: string;
	subtitle: string;
}

export default memo(({ title, subtitle }: IProps) => (
	<Container>
		<Title>{title}</Title>
		<Subtitle>{subtitle}</Subtitle>
	</Container>
));
