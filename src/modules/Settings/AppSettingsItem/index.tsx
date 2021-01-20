import React, { memo } from 'react';
import { Container, Label, Value } from './styled';

interface IProps {
	label: string;
	value?: string;
	children?: JSX.Element;
}

export default memo(({ label, value, children }: IProps) => (
	<Container>
		<Label>{label}</Label>
		{value && <Value>{value}</Value>}
		{children}
	</Container>
));
